import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <section className="bg-white rounded-t-md pt-4 px-2 mx-2">
      <div className="bg-secondary rounded-t-xl pt-8 pb-4 px-6 text-center">
        <p className="text-sm font-serif text-[#F7F9FC] mb-4">CONVINCED?</p>

        <h3 className="font-serif text-3xl text-white mb-4 ">
          Let's create magic together
        </h3>

        <p className="text-sm font-serif w-full md:w-3/5 lg:w-1/4 mx-auto text-[#F7F9FC]">
          Let us unleash our creativity and expertise highlighting lifestyles
          goals, financial aspirations and personal values.
        </p>

        <Button asChild className="mt-6 mb-12">
          <Link href="/create-account">
            Reister for Free{" "}
            <span>
              <ArrowUpRight />
            </span>
          </Link>
        </Button>
        <hr />

        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between mt-6 items-center">
          <Image
            src="/images/logo-transparent.svg"
            alt="logo"
            width={74.85}
            height={44.65}
            className="order-1"
          />

          <p className="test-xs text-[#667185] order-3 md:order-2">
            © 2024 Dream mate. All rights reserved.
          </p>

          <div className="flex flex-row space-x-4 order-2 md:order-3 ">
            <Link href="#" className="cursor-pointer ">
              <Image
                src="/images/fb-icon.svg"
                alt="fb-icon"
                width={24}
                height={24}
                className="hover:text-orange-300"
              />
            </Link>
            <Link href="#" className="cursor-pointer Shover:text-orange-300">
              <Image
                src="/images/tw-icon.svg"
                alt="tw-icon"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="cursor-pointer hover:text-orange-300">
              <Image
                src="/images/ig-icon.svg"
                alt="ig-icon"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="cursor-pointer c">
              <Image
                src="/images/ln-icon.svg"
                alt="ln-icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
