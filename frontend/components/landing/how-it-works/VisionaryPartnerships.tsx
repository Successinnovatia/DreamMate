import Image from "next/image";
import { BookATripCard } from "./bookATripCard";

export default function VisionaryParnerships() {
  return (
    <section className="flex flex-col lg:flex-row justify-center md:space-x-4 space-y-10 lg:space-y-0 items-center rounded-md bg-white mx-6 px-4 md:px-8 pt-4 pb-8">
      <div className="relative flex w-full lg:w-1/2 justify-center items-center">
        <Image
          src="/images/how-it-works/visionary-partnership-img.png"
          width={456}
          height={456}
          alt="man-sitting-with-a-woman"
        />

        <Image
          src="/images/how-it-works-frame.png"
          width={148}
          height={90}
          alt="frame"
          className="absolute -bottom-6  lg:-bottom-6 -left-4 md:left-16 lg:-left-4 xl:left-6"
        />
      </div>

      <div className="flex flex-col space-y-2 md:space-y-2 lg:space-y-8 w-full md:w-5/6 lg:w-1/2">
        <h1 className="font-serif text-xl md:text-2xl font-bold">
          Create Visionary Partnerships
        </h1>
        <BookATripCard
          text="Engage in Real Conversations"
          subtext="Once connected, take your conversations beyond small talk. DreamMate encourages discussions around shared goals, mutual growth, and long-term partnership potential."
        />

        <BookATripCard
          text="Explore Compatibility"
          subtext="Use DreamMate’s personality insights and vision board features to see how your goals align. This ensures that every match is not just romantic but also purposeful."
        />
      </div>
    </section>
  );
}
