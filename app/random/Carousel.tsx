/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

type CarouselImageType = {
  images: string[];
  isWon: boolean;
  propertyURL: string;
  numGuess: number;
};

const CarouselImage = ({
  images,
  isWon,
  propertyURL,
  numGuess,
}: CarouselImageType) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [carouselApi, setCarouselApi] = React.useState<any>(null);

  const numImages = Math.min(Math.max(numGuess, 1), images.length);
  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    carouselApi.on("select", () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const onSelect = React.useCallback(
    (index: number) => {
      if (!carouselApi) return;
      carouselApi.scrollTo(index);
    },
    [carouselApi]
  );
  return (
    <Carousel className="w-full relative" setApi={setCarouselApi}>
      <div className="rounded-sm p-1 absolute top-3 left-3 shadow-md bg-darkGreen text-white z-10">
        <p>Sold on 7/23/2024</p>
      </div>
      {isWon && (
        <a
          target="_blank"
          href={propertyURL}
          className="rounded-sm p-1 absolute top-3 right-3 shadow-md bg-yellowish text-black z-10 flex items-center hover:opacity-90"
        >
          <span>See the listing</span>
          <ChevronRight />
        </a>
      )}
      <CarouselContent className="">
        {images.slice(0, numImages).map((imageUrl, index) => (
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
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center mt-4 gap-2">
        {images.slice(0, numImages).map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`hover:bg-yellowish w-4 h-4 border-none rounded-full p-0
            transition-all duration-300 ease-in-out ${
              index === currentIndex ? "bg-yellowish scale-125" : "bg-text-clay"
            }`}
            onClick={() => onSelect(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselImage;
