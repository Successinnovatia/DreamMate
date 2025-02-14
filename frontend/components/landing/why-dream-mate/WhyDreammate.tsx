import React from "react";
import { BookATripCard } from "../how-it-works/bookATripCard";
import Image from "next/image";

function WhyDreammate() {
  return (
    <section className='py-8 bg-[#FEF6F1]'>
      <h2 className="text-secondary font-serif text-2xl md:text-3xl lg:text-5xl text-center">
        Why <span className="text-primary">DreamMate</span>
      </h2>

      <div className="flex flex-col  mx-auto justify-center space-y-12 w-5/6 lg:w-3/4 mt-10">
        <div className="relative flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
          <div className="w-full md:w-1/2 justify-start items-start">
            <BookATripCard
              text="For Visionaries"
              subtext="DreamMate is for individuals who aren’t just looking for love but a partner who shares their ambitions and dreams of living a successful, luxurious, and visionary lifestyle."
            />
          </div>

          <div className="w-1/2 hidden md:flex">
            <Image
              src="/images/why-dreammate/vector-right.png"
              alt="right-vector"
              height={224}
              width={353}
              className="absolute top-6 h-40 w-2/5"
            />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row-reverse justify-center items-center space-y-4 md:space-y-0 md:space-x-4 ">
          <div className="w-full md:w-1/2 justify-center items-center">
            <BookATripCard
              text="Curated Matches:"
              subtext="Every match on DreamMate is selected based on more than just looks—it’s about values, goals, and the drive to live a fulfilling, luxury lifestyle."
            />
          </div>

          <div className="w-1/2 hidden md:flex">
            <Image
              src="/images/why-dreammate/vector-left.png"
              alt="left-vector"
              height={224}
              width={353}
              className="absolute top-6 h-40 w-2/5"
            />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 ">
          <div className="w-full md:w-1/2 justify-start items-start">
            <BookATripCard
              text="Luxury Experience"
              subtext="From exclusive events to high-quality matches, DreamMate is the ultimate platform for ambitious individuals who want a relationship that enhances their lifestyle."
            />
          </div>

          <div className="w-1/2 hidden md:flex">
            <Image
              src="/images/why-dreammate/vector-right.png"
              alt="right-vector"
              height={224}
              width={353}
              className="absolute top-6 h-40 w-2/5"
            />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row-reverse justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 justify-center items-center">
            <BookATripCard
              text="Meet & Mingle Events"
              subtext="Host exclusive “Meet & Mingle” events in major African cities like Lagos, Nairobi, and Johannesburg for premium users to meet in person."
            />
          </div>

          <div className="w-1/2 hidden md:flex">
            <Image
              src="/images/why-dreammate/vector-left.png"
              alt="left-vector"
              height={224}
              width={353}
              className="absolute top-6 h-40 w-2/5"
            />
          </div>
        </div>


        <div className="">
          <div className="w-full md:w-1/2 justify-start items-start">
            <BookATripCard
              text="Business Networking Events:"
              subtext="Offer networking opportunities for entrepreneurial-minded users to connect in a luxury setting, blending business and pleasure."
            />
          </div>

          <div className="w-1/2"></div>
        </div>
      </div>
    </section>
  );
}

export default WhyDreammate;
