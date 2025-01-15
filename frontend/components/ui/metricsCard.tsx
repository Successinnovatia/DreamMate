import React from "react";
import Image from "next/image";

export function MetricsCard() {
  return (
    <div className="relative flex flex-col space-y-6 rounded-lg border border-1 border-[#E4E7EC] shadow-md p-3 w-48 h-30">
      <div className="flex">
        <Image
          src="/images/metrics/avatar-1.png"
          alt="avatar-image"
          width={30}
          height={25}
        />
        <Image
          src="/images/metrics/avatar-2.png"
          alt="avatar-image"
          width={30}
          height={25}
          className="-ml-3"
        />
        <Image
          src="/images/metrics/avatar-3.png"
          alt="avatar-image"
          width={30}
          height={25}
          className="-ml-3"
        />
        <div className="items-center textcenter text-sm font-bold bg-[#FFE7CC] rounded-full my-auto p-2 -ml-3 mr-12">
          +10
        </div>
      </div>
      <h1 className="absolute right-4 font-serif font-bold text-xl mt-6">
        5.795
      </h1>

      {/* RATING */}

      <div className="flex justify-between items-center">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/images/metrics/star.png"
            alt="rating-image"
            width={20}
            height={20}
          />
        ))}
      </div>
    </div>
  );
}
