"use client";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<string>("right");

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoSlide();

    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const previousSlide = () => {
    stopAutoSlide();
    setSlideDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    startAutoSlide();
  };

  const nextSlide = () => {
    stopAutoSlide();
    setSlideDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    startAutoSlide();
  };

  return (
    <section className="bg-white rounded-lg py-8 px-4 mx-2 my-8">
      <h2 className="font-serif font-bold text-center text-3xl mb-2">
        Testimonials
      </h2>

      <article className="py-12 md:px-2">
        <div className="flex md:space-x-4 justify-center items-center">
          {/*Left Arrow */}

          <button
            className="hidden md:block rounded-lg bg-[#FEF6F1] p-2"
            onClick={previousSlide}
          >
            <Image
              src="/images/testimonials/arrow-left.svg"
              alt="left-arrow"
              width={32}
              height={33}
              className="md:w-8 md:h-8"
            />
          </button>

          {/* Testimonial Items */}

          <div
            className={`flex flex-col md:flex-row md:mx-4 space-y-4 md:space-y-0 md:space-x-4 w-full md:w-5/6 `}
          >
            {/*Testimonial Text */}
            <div
              className={`flex flex-col space-y-4 w-full md:w-1/2 h-1/2 md:h-full transform transition-transform duration-700 ${
                slideDirection === "right"
                  ? "animate-slideInRight"
                  : "animate-slideInLeft"
              }`}
            >
              <div className="flex space-x-2">
                {Array.from({ length: testimonials[currentIndex].rating }).map(
                  (_, i) => (
                    <span key={i} className="items-start">
                      <Image
                        src="/images/metrics/star.png"
                        alt="rating-image"
                        width={20}
                        height={20}
                      />
                    </span>
                  )
                )}
              </div>

              <p className="tracking-wide">{testimonials[currentIndex].text}</p>

              <div className="flex space-x-2 text-center relative">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />

                <div className="">
                  <div className="text-left">
                    <p>{testimonials[currentIndex].name}</p>
                    <p className="text-[#42526B] text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>

                  <div className="absolute right-0 -top-8 md:top-0">
                    <Image
                      src="/images/testimonials/duotone-quotes.png"
                      alt="Quote"
                      width={104}
                      height={104}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*Testimonial Images  */}

            <div className="flex justify-center space-x-4 items-center w-full  md:w-1/2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  onClick={() => {
                    stopAutoSlide();
                    setCurrentIndex(index);
                    startAutoSlide();
                  }}
                  className={`cursor-pointer transition-transform transform ${
                    index === currentIndex ? "scale-100" : "scale-75 opacity-50"
                  }`}
                >
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={148}
                    height={148}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/*right arrow */}
          <button
            className="hidden md:block rounded-lg bg-[#FEF6F1] p-2"
            onClick={nextSlide}
          >
            <Image
              src="/images/testimonials/arrow-right.svg"
              alt="right-arrow"
              width={32}
              height={33}
            />
          </button>
        </div>

        {/*Indicators */}
        <div className="flex space-x-2 mt-4 justify-center md:justify-start md:pl-28">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                stopAutoSlide();
                setCurrentIndex(index);
                startAutoSlide();
              }}
              className={`${
                index === currentIndex
                  ? "h-3 w-6 bg-orange-500 rounded-xl"
                  : "h-3 w-3 bg-gray-300 rounded-full"
              }`}
            ></div>
          ))}
        </div>
      </article>
    </section>
  );
}
