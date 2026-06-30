import React, { useEffect, useState } from "react";
import "./home.css";
import ImageSlider from "./ImageSlider";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
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

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Default images
const DEFAULT_IMAGES = [
  "https://res.cloudinary.com/dgtpy2d2i/image/upload/v1782840310/Puri-slider_tbhacl.png",
  "https://res.cloudinary.com/dgtpy2d2i/image/upload/v1781020201/iskconpuri2026_pcr0fv.jpg",
];

export default function Home() {
  const [slides, setSlides] = useState(DEFAULT_IMAGES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const heroRef = collection(db, "HeroSectionData");

        const q = query(heroRef, orderBy("submittedAt", "asc"));

        const snapshot = await getDocs(q);

        const imageList = [];

        snapshot.forEach((doc) => {
          const data = doc.data();

          if (data.imageUrl && data.imageUrl.trim() !== "") {
            imageList.push(data.imageUrl);
          }
        });

        if (imageList.length > 0) {
          setSlides(imageList);
        } else {
          setSlides(DEFAULT_IMAGES);
        }
      } catch (error) {
        console.error("Error fetching hero images:", error);
        setSlides(DEFAULT_IMAGES);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroImages();
  }, []);

  return (
    <div className="homeee">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ImageSlider slides={slides} />
      )}
    </div>
  );
}