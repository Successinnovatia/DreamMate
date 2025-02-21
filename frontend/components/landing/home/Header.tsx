"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Header({scroll}:{scroll:boolean}) {
 

  const pathname = usePathname()
  const isActive = (path: string) => pathname === path;
  const [isScrolled, setIsScrolled] = useState<boolean>(scroll);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);


  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  console.log()

  useEffect(() => {
    const handleScroll = () => {
      if(isActive('/')){
        setIsScrolled(window.scrollY > 50)
      }

      else{
        setIsScrolled(true)
      }
     
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`bg-transparent fixed mt-3 w-full p-4 lg:p-0 z-50`}
    >
      <div
        className={`flex bg-transparent mb-2 justify-between mx-auto items-center w-auto lg:w-5/6 rounded-lg px-4  transition-all duration-300 ${
          isScrolled ? "bg-white backdrop-blur-md shadow-md" : "text-white"
        }`}
      >
        <Link href="/">
          <Image
            src={`${
              isScrolled
                ? "/images/logo-hero.svg"
                : "/images/logo-transparent.svg"
            }`}
            width={153.66}
            height={120}
            alt="logo"
            className="w-24 h-20"
          />
        </Link>

        {/* Desktop Nav */}

        <nav className="hidden md:flex md:space-x-2 lg:space-x-8 border border-[#D6D6D6] rounded-md py-2 px-6">
          <Link
            href="/how-it-works"
            className={`${isScrolled ? " text-[#2C3B4E] " : "text-white"} ${
              isActive("/how-it-works")
                ? "px-2 rounded-xl bg-[#FEF6F1] text-primary"
                : ""
            } hover:text-primary`}
          >
            How it works
          </Link>

          <Link
            href="/why-dream-mate"
            className={`${isScrolled ? " text-[#2C3B4E] " : "text-white"}  ${
              isActive("/why-dream-mate")
                ? "px-2 rounded-xl bg-[#FEF6F1] text-primary"
                : ""
            } hover:text-primary`}
          >
            Why DreamMate
          </Link>

          <Link
            href="/pricing"
            className={`${isScrolled ? " text-[#2C3B4E] " : "text-white"}  ${
              isActive("/pricing")
                ? "px-2 rounded-xl bg-[#FEF6F1] text-primary"
                : ""
            } hover:text-primary`}
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className={`hover:bg-transparent hover:text-primary`}
            asChild
          >
            <Link
              href="/login"
              className={
                isScrolled ? `text-[#2C3B4E] hover:text-primary` : `text-white`
              }
            >
              Login
            </Link>
          </Button>

          <Button asChild>
            <Link href="/create-account">
              Get Started{" "}
              <span>
                <ArrowUpRight />
              </span>
            </Link>
          </Button>
        </div>

        {/*Mobile Menu Icon */}

        <button className="flex items-center md:hidden" onClick={toggleNav}>
          {isNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/*Mobile Menu dropdown */}
      {isNavOpen && (
        <div
          className={`md:hidden absolute w-full top-[calc(100%+1rem)] left-0 bg-white shadow-md z-50 p-6 rounded-b-lg `}
        >
          <nav className="flex flex-col space-y-4 text-center">
            <Link
              href="/how-it-works"
              className={`text-[#2C3B4E] hover:text-primary  ${
                isActive("/how-it-works")
                  ? "px-2 rounded-xl bg-[#FEF6F1] text-primary"
                  : ""
              }`}
            >
              How it works
            </Link>

            <Link
              href="/why-dream-mate"
              className={`text-[#2C3B4E] hover:text-primary  ${
                isActive("/why-dream-mate")
                  ? "px-2 rounded-xl bg-[#FEF6F1] text-primary"
                  : ""
              }`}
            >
              Why DreamMate
            </Link>

            <Link
              href="/pricing"
              className={`text-[#2C3B4E] hover:text-primary  ${
                isActive("/pricing")
                  ? "px-2 rounded-xl bg-[#FEF6F1] text-primary"
                  : ""
              }`}
            >
              Pricing
            </Link>
          </nav>

          <div className="flex flex-col mt-4 space-y-4">
            <Button
              variant="ghost"
              className={`hover:bg-transparent hover:text-primary`}
              asChild
            >
              <Link href="/login" className="text-[#2C3B4E] hover:text-primary">
                Login
              </Link>
            </Button>

            <Button asChild>
              <Link href="/create-account">
                Get Started{" "}
                <span>
                  <ArrowUpRight />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
