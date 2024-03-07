import React,{useState}from "react";
import BookNowForm from "./BookNowForm";


export default function RoomCarausalCard({item}) {
  const[model,setmodel]=useState(false);

  const openModel = ()=>{
    setmodel(true);
  }

  return (
    <>
    <div className={model?"model open":"model"}>
    <BookNowForm/>
    <button className='modelcloseButton' onClick={()=>{setmodel(false)}}>
          &times;
    </button>
    </div>


    <div className="md:min-w-[410px] md:h-[550px] min-w-[320px] h-[590px] cursor-pointer border border-orange-500 shadow-lg rounded overflow-hidden">
      <div className="w-full h-[300px]">
        <img
          src={item.imageUrl}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-5 py-8">
        <h1 className="text-2xl">{item.roomtype}</h1>
        <p className="text-xl mt-2">{item.roomcapacityadults} adults and {item.roomcapacitychildrens} children</p>
        <p className="mt-2 text-gray-500">
          {item.roomdescription}
        </p>
      </div>
      <div className="px-5">
        <button className="w-full py-3 bg-orange-500 hover:bg-black text-white rounded" onClick={openModel}>
          Book Now
        </button>
      </div>
    </div>
    </>
    
  );
}
