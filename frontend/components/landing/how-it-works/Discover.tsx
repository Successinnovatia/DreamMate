import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Discover() {
  return (
    <section className="p-4 rounded-md bg-white mx-2">
      <div className="bg-[#FEF6F1] rounded-md flex flex-col justify-center items-center pt-10 pb-14 space-y-4 px-2">
        <h1 className="font-serif text-xl md:text-2xl font-bold text-center md:text-balance">
          Discover Matches Based on{" "}
          <span className="text-primary">Lifestyle Goals</span>
        </h1>

        <div className="flex flex-col md:flex-row w-5/6 space-y-4 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2 space-y-4">
            <DotLottieReact
              src="https://lottie.host/2d4c2368-65ca-4d84-9cee-3d8c066ac9be/pCKNFp216B.lottie"
              className="w-36 h-36"
              loop
              autoplay
            />

            <h3 className="text-secondary lg:text-xl font-serif font-bold">Intelligent Matchmaking</h3>

            <p className="text-[#4F4D55]">
              Once your profile is set, DreamMate’s AI-driven matchmaking
              algorithm will suggest potential partners based on shared values,
              lifestyle aspirations, and personal goals.
            </p>
          </div>

          <div className="md:w-1/2 space-y-4">
            <DotLottieReact
              src="https://lottie.host/bff8d63c-fd6e-48ab-af12-81ce249d90ca/Gmv7r4onYe.lottie"
              className="w-36 h-36"
              loop
              autoplay
            />
            <h3 className="text-secondary lg:text-xl font-serif font-bold">Browse & Filter</h3>

            <p className="text-[#4F4D55]">
              Use advanced filters to search for matches based on preferences
              like education, profession, location, travel interests, and
              personal aspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
