import React from "react";
import Heading from "./Heading";

export default function EventSection() {
  return (
    <div className="w-full">
      <Heading SectionHeading="News And Events At Dham" />
      <div className="w-full mt-16 flex md:flex-row flex-col md:px-16 px-4">
        <div className="md:w-[60%]">
          <img
            src="https://gracious-panini-f06fc2.netlify.app/static/media/NewsBG.63bb40f6.png"
            alt=""
            className="md:w-[800px] object-cover"
          />
        </div>
        <div className="flex flex-col md:w-[40%] w-full">
          {[1, 1, 1].map((item, index) => (
            <div
              key={index}
              className="w-full md:p-5  md:py-4 mt-4  flex md:flex-row flex-col  md:gap-4 gap-2 md:h-[200px]"
            >
              <img
                src="https://gracious-panini-f06fc2.netlify.app/static/media/News1.8003ecfb.png"
                alt=""
                className=""
              />
              <div className="md:space-y-3 space-y-1">
                <h1 className="text-xl font-semibold">John Deo - 01.10.2021</h1>
                <p className="text-xl">Lorem Ipsum Doller</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
