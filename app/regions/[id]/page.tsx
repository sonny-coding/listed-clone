import React from "react";
import Game from "@/app/regions/[id]/Game";
import { fetchRandomProperty } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guess the House Price - listing.fun",
  description:
    "Challenge yourself to guess the right house price on listing.fun! A fun and engaging way to explore the housing market.",
  metadataBase: new URL("https://listing.fun"), // Point to your website's base URL
};

type PageProps = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const regionId = params.id;
  const property = await fetchRandomProperty(regionId);
  return (
    <>
      <Game initialProperty={property} regionId={regionId} />
      {/* <p>{property?.price}</p> */}
    </>
  );
};

export default Page;
