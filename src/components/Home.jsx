import React, { useEffect,useState} from 'react';
import './home.css';
import ImageSlider from './ImageSlider';

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC52tM2h6HzGDeJkZmkjgSXtRODVUSUCMo",
    authDomain: "iskconpuri-guesthouse.firebaseapp.com",
    projectId: "iskconpuri-guesthouse",
    storageBucket: "iskconpuri-guesthouse.appspot.com",
    messagingSenderId: "316548638536",
    appId: "1:316548638536:web:e00c16c169032ffda7b57d",
    measurementId: "G-QN23VJ28YT"
  };
  

export default function Home() {

  const [slides, setImageUrls] = useState([]);
  console.log(slides);
  useEffect(() => {
    // Initialize Firebase app if not already initialized
    const app = initializeApp(firebaseConfig);

    // Reference to the Firebase Storage folder
    const storage = getStorage(app);
    const storageRef = ref(storage, "HeroSection");

    // Fetch all the images from the folder
    listAll(storageRef)
      .then((result) => {
        const urlsPromises = result.items.map((imageRef) =>
          getDownloadURL(imageRef)
        );
        return Promise.all(urlsPromises);
      })
      .then((urls) => {
        console.log(urls);
        setImageUrls(urls);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <>
      <div className='homeee'>
       {
        slides && slides.length > 0 ? <img className='sliderimage' src={slides[0]} alt="" />
        :
        <img className='sliderimage' src={slides && slides[0] && slides[0]} alt="" />
       }
      </div>
    </>
  )
}
