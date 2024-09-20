import React from "react";
import Game from "@/app/regions/[id]/Game";
import { fetchRandomProperty } from "@/lib/utils";

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
