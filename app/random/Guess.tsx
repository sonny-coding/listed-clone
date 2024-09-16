"use client";

import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

type GuessProps = {
  increaseNumGuess: () => void;
  updateUserGuess: (newGuess: string) => void;
};

const Guess = ({ increaseNumGuess, updateUserGuess }: GuessProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    increaseNumGuess();
    updateUserGuess(inputValue);
    setInputValue("");
  };
  return (
    <form className="flex w-full gap-3" onSubmit={handleSubmit}>
      <CurrencyInput
        placeholder="Make a guess..."
        className="w-full font-semibold bg-eggshell py-2 px-4 text-lg rounded-md placeholder:font-medium outline-none"
        onValueChange={(value, name, values) => {
          console.log(value, name, values);
          setInputValue(value || "");
        }}
        prefix="$"
        value={inputValue}
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
