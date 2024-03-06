import { FaWifi } from "react-icons/fa";

export const RoomfeaturesSection = () => {
    return (
      <div className="w-full grid md:grid-cols-2 grid-cols-2 md:gap-9 gap-4 px-3 py-6">
        <div className="md:w-[180px] md:h-[180px] bg-orange-500 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl p-8 flex flex-col ">
           <FaWifi className='text-white text-5xl mt-5 ml-5 text-center' />
           <p className="text-xl font-semibold uppercase text-white">Free Wifi</p>
        </div>
  
        <div className="md:w-[180px] md:h-[180px] bg-orange-500 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl p-8 flex flex-col ">
           <FaWifi className='text-white text-5xl mt-5 ml-5 text-center' />
           <p className="text-xl font-semibold uppercase text-white">Free Wifi</p>
        </div>
  
        <div className="md:w-[180px] md:h-[180px] bg-orange-500 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl p-8 flex flex-col ">
           <FaWifi className='text-white text-5xl mt-5 ml-5 text-center' />
           <p className="text-xl font-semibold uppercase text-white">Free Wifi</p>
        </div>
  
        <div className="md:w-[180px] md:h-[180px] bg-orange-500 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl p-8 flex flex-col ">
           <FaWifi className='text-white text-5xl mt-5 ml-5 text-center' />
           <p className="text-xl font-semibold uppercase text-white">Free Wifi</p>
        </div>
      </div>
    );
  };
  
