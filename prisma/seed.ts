import { prisma } from "@/lib/prisma";
import { mockApiData } from "@/lib/data";

// const fetchPosts = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   return await response.json();
// };

// PHOENIX: 6_14240
// const seed = async () => {
//   try {
//     console.log("Starting to fetch posts from JSONPlaceholder...");
//     const posts = await fetchPosts();
//     console.log(`Fetched ${posts.length} posts`);

//     // Clean up existing posts (optional)
//     await prisma.post.deleteMany();
//     console.log("Deleted existing posts");

//     // Prepare data for createMany
//     const postData = posts.slice(30).map((post: { title: any }) => ({
//       name: post.title, // Assuming 'name' in your schema corresponds to 'title' in JSONPlaceholder
//     }));

//     // Create new posts
//     await prisma.post.createMany({
//       data: postData,
//     });

//     console.log(`Seeded ${posts.length} posts successfully`);
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// seed();

// import mock data
// delete old data
// prepare data for createMany
// create new listings

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

    await prisma.property.deleteMany();
    console.log("Deleted existing listings");

    // prepare for createMany
    const listingData = listings.data.map((listing: any) => ({
      url: listing.homeData.url,
      beds: listing.homeData.baths,
      baths: listing.homeData.baths,
      yearBuilt: listing.homeData.yearBuilt.yearBuilt,
      city: listing.homeData.addressInfo.city,
      state: listing.homeData.addressInfo.state,
      zip: listing.homeData.addressInfo.zip,
      hoaDues: listing.homeData.hoaDues.amount || "0",
      regionId: region,
      sqrft: listing.homeData.sqftInfo.amount || "0",
      lotSize: listing.homeData.lotSize.amount || "0",
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

seedListings("6_14240", "20", process.env.X_RAPIDAPI_KEY as string);
