"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const backgroundObj = [
  {
    imgUrl: "/images/how-it-works/how-hero-img-1.jpg",
    style:
      "w-5/6 md:w-2/3 mx-auto flex flex-col justify-center items-center pt-60 text-white",
  },
  {
    imgUrl: "/images/how-it-works/how-hero-img-2.jpg",
    style:
      "w-full lg:w-2/3 mx-auto flex flex-col justify-center items-center  pt-36 md:pt-40 lg:-ml-4 text-secondary",
  },
];

export const Hero = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundObj.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentImgUrl = backgroundObj[currentBackground].imgUrl;
  console.log(currentImgUrl);

  const currentStyle = backgroundObj[currentBackground].style;

  return (
    <section
      className={`relative bg-no-repeat bg-cover md:bg-auto lg:bg-cover min-h-[80vh] lg:min-h-screen `}
      style={{ backgroundImage: `url(${currentImgUrl})` }}
    >
      <div className={currentStyle}>
        <div className="w-5/6">
          <h1 className="text-start text-2xl md:text-5xl font-serif font-bold tracking-wider leading-relaxed">
            Discover <span className="text-primary">Matches</span> Based on
            Lifestyle Goals
          </h1>

          <Button asChild className="mt-4">
            <Link href="/create-account">
              Free Signup
              <span>
                <ArrowUpRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
