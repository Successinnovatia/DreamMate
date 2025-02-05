import React from "react";
import Image from "next/image";
import { BookATripCard } from "./bookATripCard";

export default function DreammatePremium() {
  return (
    <section className="flex flex-col lg:flex-row justify-center mt-4 md:space-x-4 space-y-10 lg:space-y-0 items-center rounded-md bg-white mx-6 px-8 py-8">
      
      <div className="flex flex-col space-y-2 md:space-y-2 lg:space-y-8 w-full md:w-5/6 lg:w-1/2">
        <h1 className="font-serif text-xl md:text-2xl font-bold">
        Elevate Your Experience with DreamMate Premium
        </h1>
        <BookATripCard
          text="Unlock Exclusive Features"
          subtext="Upgrade to DreamMate Premium for unmatched access to luxury experiences, curated matches, and special event invites. Premium members can also explore advanced matchmaking features, such as AI-guided relationship coaching."
        />

        <BookATripCard
          text="VIP Access to Events & Experiences"
          subtext="Premium members enjoy invites to exclusive DreamMate events, including networking mixers, luxury getaways, and private VIP dinners in major cities across Africa. This makes meeting in real life easier and more exciting."
        />
      </div>

      <div className="flex w-full lg:w-1/2 justify-center items-center">
        <Image
          src="/images/how-it-works/dreammate-premium.png"
          width={456}
          height={456}
          alt="premium-members-enjoying-invites"
        />

      </div>
    </section>
  );
}
