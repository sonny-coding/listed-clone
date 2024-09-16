import React from "react";
import { convertDateTimeToMDY, convertToCash } from "@/lib/utils";

type InfoProps = {
  property: {
    [key: string]: any;
  };
  numGuess: number;
};

const Info = ({ property, numGuess }: InfoProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 text-sm text-text-fadedJay">
      <div>
        <p
          className={`${
            numGuess < 1 && "blur-sm"
          } text-base font-semibold text-text-clay`}
        >
          {numGuess >= 1
            ? `${property.data[0].homeData.addressInfo.city}, ${property.data[0].homeData.addressInfo.state}`
            : "xxxxx, xx"}
        </p>
        <p>Location</p>
      </div>
      <div>
        <p
          className={`${
            numGuess < 2 && "blur-sm"
          } text-base font-semibold text-text-clay`}
        >
          {numGuess >= 2 ? "Single Family Home" : "x"}
        </p>
        <p>Property Type</p>
      </div>
      <div className="flex gap-3">
        <div>
          <p
            className={`${
              numGuess < 3 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {numGuess >= 3 ? property.data[0].homeData.beds : "x"}
          </p>
          <p>Beds</p>
        </div>
        <div>
          <p
            className={`${
              numGuess < 3 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {numGuess >= 3 ? property.data[0].homeData.baths : "x"}
          </p>
          <p>Baths</p>
        </div>
        <div>
          <p
            className={`${
              numGuess < 4 && "blur-sm"
            } text-base font-semibold text-text-clay duration-200`}
          >
            {numGuess >= 4
              ? property.data[0].homeData.yearBuilt.yearBuilt
              : "x"}
          </p>
          <p>Built</p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div>
          <p
            className={`${
              numGuess < 5 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {numGuess >= 5 ? property.data[0].homeData.sqftInfo.amount : "xxxx"}
          </p>
          <p>Sqrft</p>
        </div>
        <div>
          <p
            className={`${
              numGuess < 6 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {numGuess >= 6 ? property.data[0].homeData.lotSize.amount : "xxxx"}
          </p>
          <p>Lot Size</p>
        </div>
      </div>
      {/* <div className="flex flex-row gap-3">
        <div>
          <p className="text-base font-semibold text-text-clay">3/29/1993</p>
          <p>Prev Sale</p>
        </div>
        <div>
          <p className="text-base font-semibold text-text-clay">$113,950</p>
          <p>Prev Price</p>
        </div>
      </div> */}
      <div className="flex flex-row gap-3">
        <div>
          <p
            className={`${
              numGuess < 7 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {numGuess >= 7
              ? convertDateTimeToMDY(
                  property.data[0].homeData.daysOnMarket.listingAddedDate
                )
              : "xx/xx/xxxx"}
          </p>
          <p>List Date</p>
        </div>
        <div>
          <p
            className={`${
              numGuess < 8 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {numGuess >= 8
              ? convertToCash(property.data[0].homeData.priceInfo.amount)
              : "xxxxxx"}
          </p>
          <p>List Price</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
