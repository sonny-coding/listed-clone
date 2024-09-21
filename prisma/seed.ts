import { prisma } from "@/lib/prisma";
// import { mockApiData } from "@/lib/data";

const seedListings = async (region: string, limit: string, apiKey: string) => {
  const fetchListings = async () => {
    const response = await fetch(
      `https://redfin-com-data.p.rapidapi.com/properties/search-sold?regionId=${region}&limit=${limit}&soldWithin=180&homeType=1%2C2%2C3%2C4`,
      {
        headers: {
          "x-rapidapi-key": apiKey,
          // "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  };
  try {
    const listings = await fetchListings();
    console.log("Starting to fetch data from redfin...");
    console.log(`Fetched ${listings.data.length} listings`);

    // await prisma.property.deleteMany();
    // console.log("Deleted existing listings");

    // prepare for createMany
    const listingData = listings.data.map((listing: any) => ({
      url: listing.homeData.url,
      beds: listing.homeData.beds,
      baths: listing.homeData.baths,
      yearBuilt: listing.homeData.yearBuilt.yearBuilt,
      city: listing.homeData.addressInfo.city,
      state: listing.homeData.addressInfo.state,
      zip: listing.homeData.addressInfo.zip,
      hoaDues: listing.homeData.hoaDues.amount,
      regionId: region,
      sqrft: listing.homeData.sqftInfo.amount,
      lotSize: listing.homeData.lotSize.amount,
      propertyType: listing.homeData.listingMetadata.listingType,
      price: listing.homeData.priceInfo.amount,
      listDate: listing.homeData.daysOnMarket.listingAddedDate,
      lastSoldDate: listing.homeData.lastSaleData.lastSoldDate,
    }));

    console.log(listingData);
    // create new listings
    await prisma.property.createMany({
      data: listingData,
    });
    console.log(`Seeded successfully`);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
};

/* 
6_14240 phoenix
6_8903 houston
6_11203 la
*/
seedListings("6_14240", "100", process.env.X_RAPIDAPI_KEY as string);
