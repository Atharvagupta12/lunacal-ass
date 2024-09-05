import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const App = () => {
  return (
    <div className="bg-[#272c31] h-full flex gap-10 px-10 py-20">
      <div className="empty-box w-[50%] hidden md:block  bg-[#565758] rounded-2xl"></div>
      <div className="main md:w-[50%] flex flex-col gap-4 ">
        <div className="about bg-[#32383e] rounded-2xl flex flex-col items-center px-5 md:h-[50%] shadow-xl shadow-slate-900">
          <div className="buttons items-center  bg-black md:flex gap-4 mt-4 p-2 rounded-2xl ">
            <button className="focus:bg-zinc-700 bg:zinc-700 px-7 py-1 rounded-xl text-lg text-white text-bold shadow-xl shadow-gray-950 ">
              About me
            </button>
            <button className="focus:bg-zinc-700 px-5 py-1 rounded-xl text-lg focus:text-white text-gray-300 text-bold  focus:shadow-xl focus:shadow-gray-950 ">
              Experiences
            </button>
            <button className="focus:bg-zinc-700 px-5 py-1 rounded-xl text-lg focus:text-white text-gray-300 text-bold focus:shadow-xl focus:shadow-gray-950 ">
              Recommended
            </button>
          </div>
          <div className="text flex flex-col gap-4 py-5">
            <div className="hello md:border-r-8 border-[#7b7d7e] md:mx-4 ">
              <h1 className="text-gray-400 text-lg md:px-12 ">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
              </h1>
            </div>
            <div>
              <h1 className="text-gray-400 text-lg md:px-16 ">
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is a...
              </h1>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-400 mx-10 "></div>

        <div className="image bg-[#32383e] rounded-2xl h-[50%] shadow-xl shadow-slate-900">
          <div className="gallery flex gap-5 items-center justify-between my-3 mx-4 md:mx-16">
            <button className="px-10 py-2 text-lg font-md text-white bg-black rounded-2xl">
              Gallery
            </button>
            <button className="bg-[#32383e] shadow-xl text-white px-3 py-2 rounded-2xl uppercase text-sm shadow-black">
              + Add image
            </button>
          </div>
          <div className="carousel">
            <Carousel
              opts={{
                align: "start",
              }}
              className="m-14 "
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 "
                  >
                     <img src="/img.png" alt="" className="w-full "/>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="border-t-2 border-gray-400 mx-10 "></div>
      </div>
     
    </div>
  );
};

export default App;
