import React from "react";
import {
  ExploreSectionCardData,
  ExploreSectionHeading,
} from "../Textfiles/webiste-Content";
import { ExploreSectioncard } from "./ExploreSectionCard";

export default function ExploreSection() {
  return (
    <div className="w-full md:h-[500px] border h-auto py-8">
      <h1 className="text-4xl underline decoration-orange-500 w-full text-center tracking-wide">
        {ExploreSectionHeading}
      </h1>
      <section className="md:px-16 px-4 md:py-16 pt-7 grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-4">
        {ExploreSectionCardData.map((item, index) => (
          <ExploreSectioncard
            key={index}
            heading={item.firstHeading}
            imgurl={item.imageUrl}
            description={item.secondHeading}
          />
        ))}
        {/* <ExploreSectioncard ExploreSectionHeading="Explore Section" /> */}
      </section>
    </div>
  );
}


