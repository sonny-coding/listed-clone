import React from "react";
import Game from "@/app/regions/[id]/Game";
import { prisma } from "@/lib/prisma";

type PageProps = {
  params: {
    id: string;
  };
};

export const fetchRandomProperty = async (regionId?: string) => {
  let whereClause = {};

  // If regionId is provided and not 'all', use it in the where clause
  if (regionId && regionId !== "all") {
    whereClause = { regionId };
  }

  // Count total properties based on the where clause
  const totalCount = await prisma.property.count({ where: whereClause });

  if (totalCount === 0) {
    return null; // No properties found
  }

  // Generate a random skip value
  const randomSkip = Math.floor(Math.random() * totalCount);

  // Fetch a random property
  const randomProperty = await prisma.property.findFirst({
    where: whereClause,
    skip: randomSkip,
  });

  return randomProperty;
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
