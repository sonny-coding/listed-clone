"use client";

import React, { useState } from "react";

type GuessProps = {
  increaseNumGuess: () => void;
  updateUserGuess: (newGuess: string) => void;
};

const Guess = ({ increaseNumGuess, updateUserGuess }: GuessProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    increaseNumGuess();
    updateUserGuess(inputValue);
  };
  return (
    <form className="flex w-full gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full font-semibold bg-eggshell py-2 px-4 text-lg rounded-md placeholder:font-medium outline-none"
        placeholder="Make a Guess..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="py-2 px-8 rounded-md bg-horizon text-lg font-semibold hover:opacity-80"
      >
        GUESS
      </button>
    </form>
  );
};

export default Guess;
