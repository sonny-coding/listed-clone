"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import CarouselImage from "./Carousel";
import Info from "./Info";
import Guess from "./Guess";
import Result from "./Result";
import { houseData } from "@/lib/data";
import {
  convertDateTimeToMDY,
  extractURL,
  fetchPropertyImages,
} from "@/lib/utils";
import LatestGuess from "./LatestGuess";
import { Photo } from "@/type/types";
// import { prisma } from "@/lib/prisma";

type Property = {
  id: string;
  url: string | null;
  beds: number | null;
  baths: number | null;
  yearBuilt: number | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  hoaDues: string | null;
  regionId: string | null;
  sqrft: string | null;
  lotSize: string | null;
  propertyType: number | null;
  price: string | null;
  createdAt: Date;
  updatedAt: Date;
  listDate: Date | null;
  lastSoldDate: Date | null;
};

type GameProps = {
  initialProperty: Property | null;
  regionId: string;
};
const Game = ({ initialProperty, regionId }: GameProps) => {
  const [numGuess, setNumGuess] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [userGuesses, setUserGuesses] = useState<string[]>([]);
  const [property, setProperty] = useState(initialProperty);
  const [images, setImages] = useState<Photo[] | null>(null);

  console.log(process.env.X_RAPID_KEY);
  const soldOn = property?.lastSoldDate
    ? convertDateTimeToMDY(property.lastSoldDate.toString())
    : "--/--/----";

  console.log(soldOn);
  const propertyURL =
    property?.url ??
    (`https://www.redfin.com${property?.url}` || "https://www.redfin.com");

  useEffect(() => {
    const fetchPropertyImages = async (url: string) => {
      const rapidApiKey = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY;

      if (!rapidApiKey) {
        throw new Error(
          "RAPID_API_KEY is not defined in environment variables"
        );
      }
      const res = await fetch(
        `https://redfin-com-data.p.rapidapi.com/property/detail-photos?url=${url}`,
        {
          headers: {
            "x-rapidapi-key": rapidApiKey,
            "x-rapidapi-host": "redfin-com-data.p.rapidapi.com",
          },
        }
      );
      const data = await res.json();
      console.log("🚀 ~ fetchPropertyImages ~ data:", data);
      const list: Photo[] = data.data;
      setImages(list);
    };

    fetchPropertyImages(propertyURL);
  }, [property, propertyURL]);

  const increaseNumGuess = async () => {
    setNumGuess((prev) => {
      return prev + 1;
    });
  };

  const updateUserGuess = (newGuess: string) => {
    setUserGuesses((prevGuesses) => [...prevGuesses, newGuess]);
    const guess = parseInt(newGuess);
    const lowerBound = parseInt(property?.price as string) * 0.95;
    const upperBound = parseInt(property?.price as string) * 1.05;
    if (guess >= lowerBound && guess <= upperBound) {
      setIsWon(true);
    }
  };

  async function fetchRandomProperty(regionId: string) {
    const res = await fetch(
      `/api/property?query=${encodeURIComponent(regionId)}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch random property");
    }
    const data = await res.json();
    setProperty(data);
  }

  const resetGame = async () => {
    setNumGuess(0);
    setIsWon(false);
    setUserGuesses([]);
    fetchRandomProperty(regionId);
  };
  return (
    <div className="max-w-xl mx-auto p-2 space-y-1">
      <Header />
      {images && (
        <CarouselImage
          soldOn={soldOn}
          numGuess={numGuess}
          images={images}
          isWon={isWon}
          propertyURL={property?.url as string}
        />
      )}
      <Info property={property} numGuess={numGuess} isWon={isWon} />
      <LatestGuess
        correctPrice={property?.price as string}
        guesses={userGuesses}
        numGuess={numGuess}
      />
      {!isWon ? (
        <Guess
          increaseNumGuess={increaseNumGuess}
          updateUserGuess={updateUserGuess}
        />
      ) : (
        <Result
          correctPrice={property?.price as string}
          numGuess={numGuess}
          resetGame={resetGame}
        />
      )}
      {/* {numGuess} */}
    </div>
  );
};

export default Game;
