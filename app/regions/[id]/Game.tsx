"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import CarouselImage from "./Carousel";
import Info from "./Info";
import Guess from "./Guess";
import Result from "./Result";
import { houseData } from "@/lib/data";
import { convertDateTimeToMDY, extractURL } from "@/lib/utils";
import LatestGuess from "./LatestGuess";
import { prisma } from "@/lib/prisma";

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

  const soldOn = property?.lastSoldDate
    ? convertDateTimeToMDY(property.lastSoldDate.toString())
    : "--/--/----";

  console.log(soldOn);
  const propertyURL = `https://www.redfin.com${property?.url}`;

  const increaseNumGuess = async () => {
    setNumGuess((prev) => {
      return prev + 1;
      // return newNumGuess;
    });
  };

  const updateUserGuess = (newGuess: string) => {
    // const TRUEPRICE = "400000";
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
    // TODO: refetch data here
    setNumGuess(0);
    setIsWon(false);
    setUserGuesses([]);
    fetchRandomProperty(regionId);
  };
  const images = extractURL(houseData.data);
  return (
    <div className="max-w-xl mx-auto p-2 space-y-1">
      <Header />
      <CarouselImage
        soldOn={soldOn}
        numGuess={numGuess}
        images={images}
        isWon={isWon}
        propertyURL={propertyURL}
      />
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
