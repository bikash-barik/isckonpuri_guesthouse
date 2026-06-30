import React, { useEffect, useState } from "react";
import "./home.css";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC52tM2h6HzGDeJkZmkjgSXtRODVUSUCMo",
  authDomain: "iskconpuri-guesthouse.firebaseapp.com",
  projectId: "iskconpuri-guesthouse",
  storageBucket: "iskconpuri-guesthouse.appspot.com",
  messagingSenderId: "316548638536",
  appId: "1:316548638536:web:e00c16c169032ffda7b57d",
  measurementId: "G-QN23VJ28YT",
};

const DEFAULT_IMAGES = [
  "https://res.cloudinary.com/dgtpy2d2i/image/upload/v1782840310/Puri-slider_tbhacl.png",
  "https://res.cloudinary.com/dgtpy2d2i/image/upload/v1781020201/iskconpuri2026_pcr0fv.jpg",
];

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
  const [slides, setSlides] = useState(DEFAULT_IMAGES);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const q = query(
          collection(db, "HeroSectionData"),
          orderBy("submittedAt", "asc")
        );

        const querySnapshot = await getDocs(q);

        const images = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();

          if (data.imageUrl) {
            images.push(data.imageUrl);
          }
        });

        // If Firestore has images use them otherwise use default images
        if (images.length > 0) {
          setSlides(images);
        } else {
          setSlides(DEFAULT_IMAGES);
        }
      } catch (error) {
        console.error("Error fetching images:", error);

        // On error also use default images
        setSlides(DEFAULT_IMAGES);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="homeee">
      <img
        className="sliderimage"
        src={slides[0]}
        alt="Hero Banner"
      />
    </div>
  );
}