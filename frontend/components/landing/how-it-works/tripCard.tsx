import React from "react";
import Image from "next/image";

export function TripCard() {
  return (
    <div className="flex flex-col bg-white rounded-xl p-8  space-y-4 relative shadow-md">
      <Image
        src={"/images/how-it-works/trip-img-big.png"}
        alt="A trip to greece"
        width={378}
        height={189}
      />

      <h2 className="text-[#080809] font-bold">Trip To Greece</h2>

      <span className="flex space-x-2 text-sm">
        <p className="pr-4">14-29 June</p>
        <p className="border-l-2 pl-2 py-0">by Robbin joseph</p>
      </span>

      <span className="flex justify-between w-2/5">
        <Image
          src={"/images/how-it-works/leaf-icon.svg"}
          alt="leaf icon"
          width={42}
          height={42}
        />

        <Image
          src={"/images/how-it-works/map-icon.svg"}
          alt="map icon"
          width={42}
          height={42}
        />

        <Image
          src={"/images/how-it-works/send.svg"}
          alt="send icon"
          width={42}
          height={42}
        />
      </span>

      <div className="flex justify-between items-center">
        <span className="flex space-x-2">
          <Image
            src={"/images/how-it-works/building-icon.svg"}
            alt="building icon"
            width={18}
            height={18}
          />

          <p className="text-sm">24 people going</p>
        </span>

        <Image
          src={"/images/how-it-works/heart-icon.svg"}
          alt="heart icon"
          width={23}
          height={21}
        />
      </div>

      <div className="flex bg-white rounded-xl p-4 w-full lg:w-3/5 space-x-2 shadow-md lg:absolute bottom-14 -right-20">
        <Image
          src={"/images/how-it-works/trip-img-sm.png"}
          alt="A trip to rome"
          width={58}
          height={58}
          className="object-contain object-top"
        />

        <div className="flex flex-col space-y-2">
          <div>
            <p className="text-sm">Ongoing</p>
            <h2 className="font-bold">Trip To Rome</h2>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-sm">
              <span className="text-primary">40%</span> completed
            </p>
            <Image
              src={"/images/how-it-works/progresbar.svg"}
              alt="progress bar"
              width={183.73}
              height={5.89}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
