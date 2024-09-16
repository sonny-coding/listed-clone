/* eslint-disable @next/next/no-img-element */
import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

type CarouselImageType = {
  images: string[];
};

const CarouselImage = ({ images }: CarouselImageType) => {
  return (
    <Carousel className="w-full relative">
      <div className="rounded-sm p-1 absolute top-3 left-3 shadow-md bg-darkGreen text-white z-10">
        <p>Sold on 7/23/2024</p>
      </div>
      <div className="rounded-sm p-1 absolute top-3 right-3 shadow-md bg-yellowish text-black z-10">
        <p>See the listing</p>
      </div>
      <CarouselContent className="">
        {images.map((imageUrl, index) => (
          <CarouselItem key={index} className="h-full relative">
            <div className="p-1 flex items-center justify-center h-[330px]">
              <img
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselImage;
