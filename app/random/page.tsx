import React from "react";
import Game from "./Game";
import { property } from "@/lib/data";

// fetch from supabase
const fetchRandomProperty = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 10);
  });
  return property;
};

const Page = async () => {
  //   const data = await fetchRandomProperty();

  return (
    <>
      <Game property={property} />;
    </>
  );
};

export default Page;
