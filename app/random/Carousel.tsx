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
    <Carousel className="w-full">
      <CarouselContent className="">
        {images.map((imageUrl, index) => (
          <CarouselItem key={index} className="h-full">
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
      {/* <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center items-center"
          >
            <div className="p-1 w-full">
              <Card className="h-[200px]">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent> */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselImage;
