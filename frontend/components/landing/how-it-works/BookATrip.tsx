import React from "react";
import { BookATripCard } from "./bookATripCard";
import { TripCard } from "./tripCard";

export default function BookATrip() {
  return (
    <section className="pb-10 md:pb-20">
      <div className="flex flex-col justify-center space-y-4 items-center w-5/6 mx-auto mt-8">
        {" "}
        <h1 className="font-serif text-2xl font-bold text-secondary">Free Sign Up</h1>
        <p className="tracking-wide w-full md:w-3/4 text-center text-[#4F4D55]">
          Think of your DreamMate profile as your personal brand. Be authentic
          and visionary, as this will attract others with aligned goals.
        </p>
      </div>

      <article className="flex flex-col md:flex-row mt-4 w-5/6 lg:w-4/5 mx-auto pt-8 md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex flex-col space-y-8 md:space-y-2 lg:space-y-8 w-full md:w-3/5">
          <BookATripCard text='Create your Profile in Minutes' subtext='Start your journey by signing up for free. You’ll be prompted to provide basic information about yourself—name, email, location, and your ideal match preferences. This is your first step toward discovering visionary partnerships'/>

          <BookATripCard text='Make Payment' subtext='Upload a professional and polished profile photo, write an inspiring bio, and share details about your lifestyle goals, aspirations, and interests. Highlight what makes you unique and what you’re looking for in a partner'/>

        </div>

        <div>
          <TripCard/>
        </div>
      </article>
    </section>
  );
}
