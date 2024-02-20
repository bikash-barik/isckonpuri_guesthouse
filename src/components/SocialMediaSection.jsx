import React,{useEffect,useState} from "react";
import { InstagramCardData } from "../Textfiles/webiste-Content";
import { SocialMediaCard } from "./SocialMediaCard";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function SocialMediaSection() {
  const [ExplorePlaceData, setExplorePlaceData] = useState([]);
  useEffect(() => {
    const firestore = firebase.firestore();
    const contentDataRef = firestore.collection("ExplorePlaceData");
    const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
      const newContentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(newContentData);
      setExplorePlaceData(newContentData);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="w-full h-auto md:mb-10 mb-2 border md:pt-32">
      <h1 className="text-4xl underline decoration-orange-500 w-full text-center tracking-wide">
      Explore These Places
      </h1>
      <div className="flex w-full px-4 pb-6 justify-around mt-10 gap-10 overflow-x-scroll md:overflow-hidden">
        {
          ExplorePlaceData.length > 0 ?
          ExplorePlaceData.map((item,index) =>{
            return <SocialMediaCard key={index} imgUrl={item.imageUrl} placename={item.placename} />
        })
        :
            InstagramCardData.map((item,index) =>{
                return <SocialMediaCard key={index} imgUrl={item.imgurl} placename={item.placename}/>
            })
        }
       
      </div>
    </div>
  );
}


