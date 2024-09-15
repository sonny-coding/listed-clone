import React from "react";
import Game from "./Game";
import { property } from "@/lib/data";

// fetch from supabase
const fetchRandomProperty = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return property;
};

const Page = async () => {
  const data = await fetchRandomProperty();
  console.log(data);

  return (
    <>
      <Game property={property} />;
    </>
  );
};

export default Page;
