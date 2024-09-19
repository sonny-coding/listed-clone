import React from "react";
import Game from "@/app/random/Game";
import { property } from "@/lib/data";
import { prisma } from "@/lib/prisma";

// fetch from supabase
const fetchRandomProperty = async () => {};

type PageProps = {
  params: {
    id: string;
  };
};

interface Property {
  id: string;
  url: string;
  beds: number;
  baths: number;
  yearBuilt: number;
  city: string;
  state: string;
  zip: string;
  hoaDues: string;
  area: string;
  sqrft: string;
  lotSize: string;
  propertyType: number;
  price: number;
  regionId: string;
  // Add any other fields from your schema
}

const fetchProperties = async (regionId?: string) => {
  const whereClause = regionId ? { regionId } : undefined;
  const properties = await prisma.property.findMany({
    where: whereClause,
    take: 20, // Fetch more records to ensure randomness
  });
  const shuffledProperties = properties.sort(() => Math.random() - 0.5);
  return shuffledProperties.slice(0, 10);
};

const Page = async ({ params }: PageProps) => {
  const regionId = params.id === "6_14240" ? params.id : undefined;

  const properties = await fetchProperties(regionId);
  return (
    <>
      {/* <Game property={property} />; */}
      <ul>
        {properties.map((each) => {
          return <li key={each.id}>{each.url}</li>;
        })}
        {properties.length}
      </ul>
    </>
  );
};

export default Page;
