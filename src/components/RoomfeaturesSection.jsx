import { FaWifi } from "react-icons/fa";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { SiInternetexplorer } from "react-icons/si";
export const RoomfeaturesSection = () => {
    return (
      <div className="w-full grid md:grid-cols-2 grid-cols-2 md:gap-9 gap-4 px-3 py-6">
        <div className="md:w-[180px] md:h-[180px] bg-orange-500 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl p-8 flex flex-col ">
           <FaWifi className='text-white text-5xl mt-5 ml-8 text-center' />
           <p className="text-xl text-center font-semibold uppercase text-white">Free Wifi</p>
        </div>
  
        <div className="md:w-[180px] md:h-[180px] bg-orange-500 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl p-8 flex flex-col ">
           <TbAirConditioningDisabled className='text-white text-5xl mt-5 ml-8 text-center' />
           <p className="text-xl text-center font-semibold uppercase text-white">AC Room</p>
        </div>
  
        <div className="md:w-[180px] md:h-[180px] bg-orange-500 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl p-8 flex flex-col ">
           <MdOutlineSportsGymnastics className='text-white text-5xl mt-5 ml-8 text-center' />
           <p className="text-xl text-center font-semibold uppercase text-white">Gym</p>
        </div>
  
        <div className="md:w-[180px] md:h-[180px] bg-orange-500 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl p-8 flex flex-col ">
           <SiInternetexplorer className='text-white text-5xl mt-5 ml-8 text-center' />
           <p className="text-xl text-center font-semibold uppercase text-white">Internet</p>
        </div>
      </div>
    );
  };
  
