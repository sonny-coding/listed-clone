import { NextRequest, NextResponse } from "next/server";
import { fetchRandomProperty } from "@/lib/utils";

export async function GET(request: NextRequest) {
  const regionId = request.nextUrl.searchParams.get("query");

  if (!regionId) {
    return NextResponse.json(
      { error: "Region ID is required" },
      { status: 400 }
    );
  }

  try {
    const randomProperty = await fetchRandomProperty(regionId);

    if (!randomProperty) {
      return NextResponse.json(
        { error: "No properties found for the given region" },
        { status: 404 }
      );
    }

    return NextResponse.json(randomProperty);
  } catch (error) {
    console.error("Error fetching random property:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// async function getRandomProperty(regionId: string) {
//   const whereClause = regionId ? { regionId } : {};

//   const totalCount = await prisma.property.count({ where: whereClause });

//   if (totalCount === 0) {
//     return null; // No properties found
//   }

//   const randomSkip = Math.floor(Math.random() * totalCount);

//   const randomProperty = await prisma.property.findFirst({
//     where: whereClause,
//     skip: randomSkip,
//   });

//   return randomProperty;
// }
