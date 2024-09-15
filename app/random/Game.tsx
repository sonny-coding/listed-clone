"use client";
import { useState } from "react";
import Header from "./Header";
import CarouselImage from "./Carousel";
import Info from "./Info";
import Guess from "./Guess";
import { houseData } from "@/lib/data";
import { extractURL } from "@/lib/utils";
type GameProps = {
  property: {};
};

const Game = ({ property }: GameProps) => {
  const [numGuess, setNumGuess] = useState(0);
  const [userGuess, setUserGuess] = useState("12345");

  const increaseNumGuess = () => {
    setNumGuess((prev) => {
      return prev + 1;
    });
  };

  const updateUserGuess = (newGuess: string) => {
    setUserGuess(newGuess);
  };
  const images = extractURL(houseData.data);
  return (
    <div className="max-w-xl mx-auto p-2 space-y-1">
      <Header />
      <CarouselImage images={images} />
      <Info property={property} />
      {`${userGuess} ${numGuess}`}
      <Guess
        increaseNumGuess={increaseNumGuess}
        updateUserGuess={updateUserGuess}
      />
    </div>
  );
};

export default Game;
