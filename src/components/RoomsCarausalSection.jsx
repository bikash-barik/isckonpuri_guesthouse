import React, { useRef,useEffect,useState } from "react";
import RoomCarausalCard from "./RoomCarausalCard";
import { FaAngleLeft} from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function RoomsCarausalSection() {
  const boxxRef = useRef(null);
  const handlePressPrevious = () => {
    const box = boxxRef.current;
    if (box) {
      const width = box?.clientWidth;
      box.scrollLeft -= width;
    }
  };

  const handlePressNext = () => {
    const box = boxxRef.current;
    if (box) {
      const width = box?.clientWidth;
      box.scrollLeft += width;
    }
  };

  const [BestRoomsData, setBestRoomsData] = useState([]);
  useEffect(() => {
    const firestore = firebase.firestore();
    const contentDataRef = firestore.collection("BestRoomsData");
    const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
      const newContentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(newContentData);
      setBestRoomsData(newContentData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full h-auto md:mb-10 md:px-16 px-4 py-8">
      <div className="w-full my-8">
        <h1 className="text-4xl   underline decoration-orange-500 w-full text-center tracking-wide">
          Best Rooms
        </h1>
      </div>
      <div
        ref={boxxRef}
        id="container"
        className="w-full overflow-hidden scroll-smooth flex space-x-10 md:px-10 "
      >
        {
        BestRoomsData.map((item, index) => (
          <RoomCarausalCard key={index} item={item}/>
        ))}
      </div>
      <div className="w-full mt-8 text-center ">
        <button
          onClick={handlePressNext}
          className=" text-center px-4 py-2 border border-black text-orange-500 text-xl font-bold rounded hover:bg-black hover:text-white hover:border-none transition-all duration-75"
        >
          <FaAngleRight />
        </button>
        <button
          onClick={handlePressPrevious}
          className=" px-4 py-2 ml-3 border border-black text-orange-500 text-xl font-bold rounded hover:bg-black hover:text-white hover:border-none"
        >
          <FaAngleLeft />
        </button>
      </div>
    </div>
  );
}
