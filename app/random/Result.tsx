"use client";

type ResultProps = {
  numGuess: number;
  resetGame: () => void;
};

const Result = ({ resetGame, numGuess }: ResultProps) => {
  return (
    <div className="text-center text-lg space-y-3 p-3 border-2 border-yellowish rounded-sm">
      <p>
        Sold for: <span className="font-bold">$400,000</span>
      </p>
      <p>
        Persistent! You won this game in
        <span className="text-yellowish">{` ${numGuess} guesses`}</span>
      </p>
      <button
        onClick={resetGame}
        className="text-lg py-2 px-7 bg-yellowish font-bold hover:opacity-80 rounded-md"
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default Result;
