import React from "react";
import { convertDateTimeToMDY, convertToCash } from "@/lib/utils";

type InfoProps = {
  property: {
    [key: string]: any;
  };
  numGuess: number;
  isWon: boolean;
};

const Info = ({ property, numGuess, isWon }: InfoProps) => {
  const current = isWon ? 100 : numGuess;
  return (
    <div className="grid grid-cols-2 gap-2 text-sm text-text-fadedJay">
      <div>
        <p
          className={`${
            current < 1 && "blur-sm"
          } text-base font-semibold text-text-clay`}
        >
          {current >= 1
            ? `${property.data[0].homeData.addressInfo.city}, ${property.data[0].homeData.addressInfo.state}`
            : "xxxxx, xx"}
        </p>
        <p>Location</p>
      </div>
      <div>
        <p
          className={`${
            current < 2 && "blur-sm"
          } text-base font-semibold text-text-clay`}
        >
          {current >= 2 ? "Single Family Home" : "x"}
        </p>
        <p>Property Type</p>
      </div>
      <div className="flex gap-3">
        <div>
          <p
            className={`${
              current < 3 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {current >= 3 ? property.data[0].homeData.beds : "x"}
          </p>
          <p>Beds</p>
        </div>
        <div>
          <p
            className={`${
              current < 3 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {current >= 3 ? property.data[0].homeData.baths : "x"}
          </p>
          <p>Baths</p>
        </div>
        <div>
          <p
            className={`${
              current < 4 && "blur-sm"
            } text-base font-semibold text-text-clay duration-200`}
          >
            {current >= 4 ? property.data[0].homeData.yearBuilt.yearBuilt : "x"}
          </p>
          <p>Built</p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div>
          <p
            className={`${
              current < 5 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {current >= 5 ? property.data[0].homeData.sqftInfo.amount : "xxxx"}
          </p>
          <p>Sqrft</p>
        </div>
        <div>
          <p
            className={`${
              current < 6 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {current >= 6 ? property.data[0].homeData.lotSize.amount : "xxxx"}
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
              current < 7 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {current >= 7
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
              current < 8 && "blur-sm"
            } text-base font-semibold text-text-clay`}
          >
            {current >= 8
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
