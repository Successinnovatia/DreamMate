import React from "react";
import Image from "next/image";

export function MarqueeImages() {
  return (
    <div className="flex space-x-4  w-[200%]">
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {[...Array(6)].map((_, i) => (
            <Image
              key={i}
              src={`/images/marquee/marque-img-${i + 1}.png`}
              alt={`image-${i + 1}`}
              width={200}
              height={150}
              className={`transform -rotate-6`}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
