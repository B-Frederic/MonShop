import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import saleData from "../data/dataSlide";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
      setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400w] h-full flex transition-transform duration-1000"
        >
          {
            saleData.map((data) => {
              return (
                <img
                className="w-screen h-full object-cover"
                src= {data.image}
                alt= {data.alt}
                key= {data.id}
                loading= {data.loading}
                />
              )
            })
          }
        </div>
        <div className="absolute w-fit left-[5%] top-[50%] mx-auto flex gap-[100px] bottom-44">
          <div
            onClick={prevSlide}
            className="w-12 h-12 border-[1px] border-gray-700 rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
        </div>
        <div className="absolute w-fit right-[5%] top-[50%] mx-auto flex gap-[100px] bottom-44">
          <div
            onClick={nextSlide}
            className="w-12 h-12 border-[1px] border-gray-700 rounded-full flex items-center justify-center hover:cursor-pointer lg:hover:bg-gray-700 lg:hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;
