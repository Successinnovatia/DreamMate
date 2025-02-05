"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CookiesConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accept");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "decline");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 h-dvh bg-[#E9EFF4CC] flex items-end z-50 pb-6 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-x-2 md:space-y-0 bg-secondary w-full md:w-3/4 lg:w-3/5 xl:1/2 p-6 shadow-lg rounded-md">
        <div className="w-full md:w-3/5">
          <p className="text-[#8896AB]">
            We use third-party cookies in order to personalise your experience
          </p>
          <div className="flex space-x-4 mt-2 md:mt-6">
            <p className="text-primary">Read our cookie policy</p>
            <button>
              <Link href="#">
                <Image
                  src="/images/arrow-right.svg"
                  alt="right-arrow"
                  height={24}
                  width={24}
                />
              </Link>
            </button>
          </div>
        </div>

        <div className="flex space-x-4 w-full md:w-2/5 md:justify-end">
          <Button className="bg-[#E8D1C1] text-secondary" onClick={handleDecline}>Decline</Button>

          <Button className="bg-primary" onClick={handleAccept}>Accept</Button>
        </div>
      </div>
    </div>
  );
}
