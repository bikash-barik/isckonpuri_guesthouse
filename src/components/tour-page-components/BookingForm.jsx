import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import BookNowForm from "../BookNowForm";

export default function BookingForm() {
  const [room, setRoom] = useState("");
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);

  const handleIncrement = (type) => {
    if (type === "adult") {
      setAdult(adult + 1);
    } else {
      setChild(child + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "adult") {
      setAdult(adult - 1);
    } else {
      setChild(child - 1);
    }
  };

  const handleChange = (event) => {
    setRoom(event.target.value);
  };

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
    <div className="md:w-[460px] w-full h-auto bg-white shadow-2xl rounded-lg overflow-hidden">
      <div className="h-[270px]">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-604706020372898045/original/2d2f7a32-70d9-4cf8-8f76-7a48b36fcffe.jpeg?im_w=720"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-3 py-3 flex w-full mb-3  justify-between items-center">
        <p className="text-2xl font-semibold">Royal room</p>
        <div className="flex items-center gap-5">
          <p className="text-gray-500 text-2xl font-semibold line-through">
            ₹499
          </p>
          <p className="text-orange-500  text-2xl font-bold">₹299</p>
        </div>
      </div>
      <div className="w-full px-3 mt-2 flex items-center gap-5">
        <p className="text-xl font-semibold capitalize">Adults-3</p>
        <p className="text-xl font-semibold capitalize">Child-4</p>
      </div>
      <div>
        <div action="" className="w-full px-3 mt-5">
          <div className="flex items-center gap-3">
            <div className="w-full mb-3">
              <input
                type="date"
                id="date"
                placeholder="check in"
                className="w-full mt-2 h-10 border border-gray-300 rounded-md px-3 py-8"
              />
            </div>
            <div className="w-full mb-3">
              <input
                type="date"
                id="date"
                className="w-full mt-2 h-10 border border-gray-300 rounded-md px-3 py-8"
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-between gap-4 ">
            <div className="flex w-full items-center border border-gray-400 rounded-md p-3 justify-between px-2">
              <p>adult</p>
              <div className="flex items-center gap-3 text-xl">
                   <button onClick={()=>handleIncrement("adult")} className="text-xl text-orange-500">+</button>
                   <p>{adult}</p>
                   <button  onClick={()=>handleDecrement("adult")} className="text-xl text-orange-500">-</button>
              </div>
            </div>           
            <div className="flex w-full items-center border border-gray-400 rounded-md p-3 justify-between px-2">
              <p>adult</p>
              <div className="flex items-center gap-3 text-xl">
                   <button onClick={()=>handleIncrement("child")} className="text-xl text-orange-500">+</button>
                   <p>{child}</p>
                   <button onClick={()=>handleDecrement("child")}  className="text-xl text-orange-500">-</button>
              </div>
            </div>         
          </div>

          <div className="w-full mb-3 mt-4">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  select room type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={room}
                  label="select room type"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>single room</MenuItem>
                  <MenuItem value={20}>double room</MenuItem>
                  <MenuItem value={30}>multi room</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="w-full mb-5 mt-3">
            <button className={`w-full ${model ? "bg-red-700" : "bg-orange-500" } text-white py-3 rounded-md`} onClick={openModel}>
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
