import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Guess the House Price - listing.fun",
  description:
    "Challenge yourself to guess the right house price on listing.fun! A fun and engaging way to explore the housing market.",
  metadataBase: new URL("https://listing.fun"), // Point to your website's base URL
};

const Page = async () => {
  redirect("/regions/all");
};

export default Page;

/* 
META
fetch images
*/
