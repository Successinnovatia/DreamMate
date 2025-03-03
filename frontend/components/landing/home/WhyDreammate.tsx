import React from "react";
import Image from "next/image";

export default function WhyDreammate() {
  return (
    <div className="flex flex-col md:flex-row bg-[#EDE9DE] w-5/6 mx-auto my-12 rounded-2xl">
      <Image
        src="/images/landing-why-dreamate-different.png"
        alt="photorealistic-valentines-day-celebration"
        width={676}
        height={437}
        className="w-full md:w-1/2 lg:w-3/5 rounded-lg md:rounded-none"
      />

      <div className="flex flex-col justify-center space-y-6 p-4 w-full md:w-1/2 lg:w-2/5">
        <h2 className="text-2xl font-semibold font-serif">Why DreamMate is Different</h2>
        <p className="font-medium tracking-wide">
          {"Why DreamMate is Different We focus on relationships built on shared visions for life. It’s not just about love—it’s about lifestyle, success, and shared dreams."}
        </p>
      </div>
    </div>
  );
}
