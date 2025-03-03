"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/gallery/gallery-img-3.png",
    position: "top-6",
  },
  { src: "/images/gallery/gallery-img-4.png", position: "top-6" },
  { src: "/images/gallery/gallery-img-5.png", position: "top-12" },
  { src: "/images/gallery/gallery-img-1.png", position: "top-6" },
  { src: "/images/gallery/gallery-img-2.png", position: "top-12" },
  {
    src: "/images/gallery/gallery-img-3.png",
    position: "top-6",
  },
  { src: "/images/gallery/gallery-img-4.png", position: "top-6" },
  { src: "/images/gallery/gallery-img-5.png", position: "top-12" },
  { src: "/images/gallery/gallery-img-1.png", position: "top-6" },
  { src: "/images/gallery/gallery-img-2.png", position: "top-12" },
  
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  


  return (
    <div className="w-full flex justify-center">
      <Swiper
        
        spaceBetween={30}
        slidesPerView={1.5}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 }, 
          768: { slidesPerView: 3, spaceBetween: 30 }, 
          1024: { slidesPerView: 5, spaceBetween: 50 }, 
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative h-72"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
             <div className={`absolute py-2 md:py-0 transition-all duration-500 ease-in-out ${activeIndex === index ? 'h-72 top-0  opacity-100 ':`h-3/4 opacity-80 ${image.position}`}  w-full  rounded-lg`}>
              <Image
                src={image.src}
                alt={`Image ${index}`}
                height={346}
                width={253}
                className="w-full h-full rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};

export default Gallery;
