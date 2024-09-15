import React from "react";
import { convertDateTimeToMDY, convertToCash } from "@/lib/utils";

type InfoProps = {
  property: {
    [key: string]: any;
  };
};

const Info = ({ property }: InfoProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 text-sm text-text-fadedJay">
      <div>
        <p className="blur-md text-base font-semibold text-text-clay">
          {`${property.data[0].homeData.addressInfo.city}, ${property.data[0].homeData.addressInfo.state}`}
        </p>
        <p>Location</p>
      </div>
      {/* <div>
        <p className="text-base font-semibold text-text-clay">
          Single Family Home
        </p>
        <p>Property Type</p>
      </div> */}
      <div className="flex gap-3">
        <div>
          <p className="text-base font-semibold text-text-clay">
            {property.data[0].homeData.beds}
          </p>
          <p>Beds</p>
        </div>
        <div>
          <p className="text-base font-semibold text-text-clay">
            {property.data[0].homeData.baths}
          </p>
          <p>Baths</p>
        </div>
        <div>
          <p className="text-base font-semibold text-text-clay">
            {property.data[0].homeData.yearBuilt.yearBuilt}
          </p>
          <p>Built</p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div>
          <p className="text-base font-semibold text-text-clay">
            {property.data[0].homeData.sqftInfo.amount}
          </p>
          <p>Sqrft</p>
        </div>
        <div>
          <p className="text-base font-semibold text-text-clay">
            {property.data[0].homeData.lotSize.amount}
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
          <p className="text-base font-semibold text-text-clay">
            {convertDateTimeToMDY(
              property.data[0].homeData.daysOnMarket.listingAddedDate
            )}
          </p>
          <p>List Date</p>
        </div>
        <div>
          <p className="text-base font-semibold text-text-clay">
            {convertToCash(property.data[0].homeData.priceInfo.amount)}
          </p>
          <p>List Price</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
