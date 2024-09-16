import React from "react";
import { ArrowUp, ArrowDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface LatestGuessProps {
  correctPrice: string;
  guesses: string[];
  numGuess: number;
}

const LatestGuess: React.FC<LatestGuessProps> = ({
  correctPrice,
  guesses,
  numGuess,
}) => {
  const parsePrice = (price: string): number => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  };

  const getComparisonArrow = (guess: string) => {
    const guessNumber = parsePrice(guess);
    const correctPriceNumber = parsePrice(correctPrice);
    const priceDifference = Math.abs(guessNumber - correctPriceNumber);
    const percentageDifference = (priceDifference / correctPriceNumber) * 100;

    if (percentageDifference <= 10) {
      return guessNumber > correctPriceNumber ? (
        <ArrowDownRight className="text-yellow-500" size={24} />
      ) : (
        <ArrowUpRight className="text-yellow-500" size={24} />
      );
    } else {
      return guessNumber > correctPriceNumber ? (
        <ArrowDown className="text-red-500" size={24} />
      ) : (
        <ArrowUp className="text-green-500" size={24} />
      );
    }
  };

  const latestGuess = guesses[guesses.length - 1];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-gray-100 p-3 rounded-md cursor-pointer hover:bg-gray-200 transition-colors">
          <h3 className="text-lg font-semibold mb-1">Latest Guess</h3>
          <div className="flex items-center space-x-2">
            <p className="text-xl font-bold text-blue-600">
              {latestGuess
                ? `Guess ${numGuess}: ${latestGuess}`
                : "No guesses yet"}
            </p>
            {latestGuess && (
              <div className="flex items-center">
                <span className="mr-2">Next Guess:</span>
                {getComparisonArrow(latestGuess)}
              </div>
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Guess History</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          {guesses.map((guess, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="text-lg">
                Guess {index + 1}: {guess}
              </p>
              <div className="flex items-center">
                {/* <span className="mr-2">Next Guess:</span> */}
                {getComparisonArrow(guess)}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LatestGuess;
