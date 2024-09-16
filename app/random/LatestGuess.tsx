import React from "react";
import {
  ArrowUp,
  ArrowDown,
  ArrowUpRight,
  ArrowDownRight,
  Smile,
} from "lucide-react";
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

function formatCurrency(guess: string): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    // Add this line to ensure no fractions
  });
  return formatter.format(parseInt(guess));
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

    if (percentageDifference <= 5) {
      return <Smile className="text-darkGreen" size={24} />;
    } else if (percentageDifference <= 10) {
      return guessNumber > correctPriceNumber ? (
        <ArrowDownRight className="text-yellowish" size={24} />
      ) : (
        <ArrowUpRight className="text-yellowish" size={24} />
      );
    } else {
      return guessNumber > correctPriceNumber ? (
        <ArrowDown className="text-yellowish" size={24} />
      ) : (
        <ArrowUp className="text-yellowish" size={24} />
      );
    }
  };

  const latestGuess = guesses[guesses.length - 1];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-sm hover:cursor-pointer flex items-center justify-center gap-7 p-2">
          <p className="text-lg text-text-fadedJay">
            {latestGuess
              ? `Guess ${numGuess}: ${formatCurrency(latestGuess)}`
              : "No guesses yet"}
          </p>
          {latestGuess && (
            <div className="flex items-center gap-3">
              <p className="">Next Guess:</p>
              {getComparisonArrow(latestGuess)}
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="bg-eggshell mx-auto scroll-auto max-h-[90%] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Guess History</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          {guesses.map((guess, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="text-lg">
                Guess {index + 1}: {formatCurrency(guess)}
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
