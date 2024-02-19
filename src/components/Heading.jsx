import React from "react";

export default function Heading({ SectionHeading }) {
  return (
    <div className="w-full">
      <h1 className="text-4xl underline decoration-orange-500 w-full text-center tracking-wide">
        {SectionHeading}
      </h1>
    </div>
  );
}
