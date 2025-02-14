"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents event from bubbling up
    setIsOpen(!isOpen);
  };
  return (
    <div className="mt-8 space-y-4">
      <div className="flex justify-between items-center space-x-2 cursor-pointer bg-[#FEF6F1] p-2 md:p-4 rounded-lg shadow-md " onClick={toggleOpen} >
        <div className="text-left w-5/6" >
          <h3 className="font-semibold">{question}</h3>
          {isOpen &&  <p className="text-[#4F4D55] mt-1">{answer}</p>}
        </div>
        
        <button onClick={toggleOpen} className="w-1/6 h-5 flex items-center justify-center">
          <Image
            src="/images/why-dreammate/arrow-up.svg"
            alt={isOpen ? "up arrow" : "down arrow"}
            height={20}
            width={20}
            className={isOpen ? "w-full h-full" : "w-full h-full rotate-180"}
          />
        </button>
      </div>
    </div>
  );
}

export default FaqItem;
