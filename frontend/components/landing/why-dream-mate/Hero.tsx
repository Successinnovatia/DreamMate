import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Gallery from "./Gallery";

function Hero() {
  return (
    <section
      className={`relative bg-[url(/images/why-dreammate/hero-bg.jpg)] bg-cover md:bg-auto xl:bg-cover bg-no-repeat min-h-[80vh] lg:min-h-screen `}
    >
      <div className="w-5/6 md:w-2/3 mx-auto flex flex-col justify-center items-center pt-40 md:pt-60 lg:pt-40 mb-8">
        <h1 className="text-center font-serif font-bold tracking-wider leading-8 text-2xl md:text-5xl ">
          Stories <span className="text-primary">Meet</span> their perfect{" "}
          <span className="text-primary">Audience</span>
        </h1>

        <Button asChild className="mt-4 bg-secondary">
          <Link href="/create-account">
            Free Signup
            <span>
              <ArrowUpRight />
            </span>
          </Link>
        </Button>
      </div>
      <Gallery />
    </section>
  );
}

export default Hero;
