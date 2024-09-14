import React from "react";
// import Header from "@/compoments/Header";
import Carousel from "@/compoments/Carousel";
// import Info from "@/compoments/Info";
// import SubmitResult from "@/compoments/SubmitResult";
import { AlignJustify, CircleHelp } from "lucide-react";
import { houseData } from "@/lib/data";
import { extractURL } from "@/lib/utils";

const Page = () => {
  const images = extractURL(houseData.data);
  console.log("🚀 ~ Page ~ images:", images);
  return (
    <div className="max-w-xl mx-auto p-2 ">
      <div className="w-full flex justify-between [&>*]:hover:cursor-pointer">
        <AlignJustify />
        <CircleHelp />
      </div>
      <Carousel images={images} />
      <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-text-fadedJay">
        <div>
          <p className="text-base font-semibold text-text-clay">Phoenix, AZ</p>
          <p>Location</p>
        </div>
        <div>
          <p className="text-base font-semibold text-text-clay">Phoenix, AZ</p>
          <p>Location</p>
        </div>
        <div className="flex gap-2">
          <div>
            <p className="text-base font-semibold text-text-clay">3</p>
            <p>Beds</p>
          </div>
          <div>
            <p className="text-base font-semibold text-text-clay">4</p>
            <p>Baths</p>
          </div>
          <div>
            <p className="text-base font-semibold text-text-clay">1994</p>
            <p>Baths</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <p className="text-base font-semibold text-text-clay">2000</p>
            <p>Sqrft</p>
          </div>
          <div>
            <p className="text-base font-semibold text-text-clay">100</p>
            <p>Lot Size</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <p className="text-base font-semibold text-text-clay">3/29/1993</p>
            <p>Prev Sale</p>
          </div>
          <div>
            <p className="text-base font-semibold text-text-clay">$113,950</p>
            <p>Prev Price</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <p className="text-base font-semibold text-text-clay">6/24/2022</p>
            <p>List Date</p>
          </div>
          <div>
            <p className="text-base font-semibold text-text-clay">$249,900</p>
            <p>List Price</p>
          </div>
        </div>
      </div>
      <form action="" className="flex w-full gap-3">
        <input
          type="text"
          className="w-full font-semibold bg-eggshell py-2 px-4 text-lg rounded-md placeholder:font-medium outline-none"
          placeholder="Make a Guess..."
        />
        <button className="py-2 px-8 rounded-md bg-horizon text-lg font-semibold hover:opacity-80">
          GUESS
        </button>
      </form>
    </div>
  );
};

export default Page;
