"use client";
import { useState } from "react";
import Header from "./Header";
import CarouselImage from "./Carousel";
import Info from "./Info";
import Guess from "./Guess";
import Result from "./Result";
import { houseData } from "@/lib/data";
import { extractURL } from "@/lib/utils";
import LatestGuess from "./LatestGuess";
type GameProps = {
  property: {
    [key: string]: any;
  };
};

const Game = ({ property }: GameProps) => {
  const [numGuess, setNumGuess] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [userGuesses, setUserGuesses] = useState<string[]>([]);

  const TRUEPRICE = "400000";
  const propertyURL = `https://www.redfin.com${property.data[0].homeData.url}`;

  const increaseNumGuess = () => {
    setNumGuess((prev) => {
      const newNumGuess = prev + 1;
      //   if (newNumGuess > 5) {
      //     setIsWon(true);
      //   }
      return newNumGuess;
    });
  };

  const updateUserGuess = (newGuess: string) => {
    // const TRUEPRICE = "400000";
    setUserGuesses((prevGuesses) => [...prevGuesses, newGuess]);
    const guess = parseInt(newGuess);
    const lowerBound = parseInt(TRUEPRICE) * 0.95;
    const upperBound = parseInt(TRUEPRICE) * 1.05;
    if (guess >= lowerBound && guess <= upperBound) {
      setIsWon(true);
    }
  };

  const resetGame = () => {
    // TODO: refetch data here
    setNumGuess(0);
    setIsWon(false);
    setUserGuesses([]);
  };
  const images = extractURL(houseData.data);
  return (
    <div className="max-w-xl mx-auto p-2 space-y-1">
      <Header />
      <CarouselImage images={images} isWon={isWon} propertyURL={propertyURL} />
      <Info property={property} numGuess={numGuess} isWon={isWon} />
      <LatestGuess
        correctPrice="400000"
        guesses={userGuesses}
        numGuess={numGuess}
      />
      {!isWon ? (
        <Guess
          increaseNumGuess={increaseNumGuess}
          updateUserGuess={updateUserGuess}
        />
      ) : (
        <Result numGuess={numGuess} resetGame={resetGame} />
      )}
    </div>
  );
};

export default Game;
