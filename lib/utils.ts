import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface PhotoUrls {
  fullScreenPhotoUrl: string;
  lightboxListUrl: string;
  nonFullScreenPhotoUrl: string;
  nonFullScreenPhotoUrlCompressed: string;
}

interface ThumbnailData {
  thumbnailUrl: string;
}

interface PhotoData {
  dataSourceId: number;
  displayLevel: number;
  fileName: string;
  height: number;
  photoId: number;
  photoType: string;
  photoUrls: PhotoUrls;
  subdirectory: string;
  thumbnailData: ThumbnailData;
  width: number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractURL = (data: PhotoData[]) => {
  return data.slice(0, 8).map((each) => {
    return each.photoUrls.nonFullScreenPhotoUrl;
  });
};

export const convertDateTimeToMDY = (dateString: string): string => {
  // Parse the input string to a Date object
  const date = new Date(dateString);
  // Get month, day, and year
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  const year = date.getUTCFullYear().toString().slice(-2);

  // Format the date as m/d/y
  return `${month}/${day}/${year}`;
};

export const convertToCash = (amount: string): string => {
  // Remove any non-digit characters from the input
  const cleanAmount = amount.replace(/\D/g, "");

  // Convert to number and check if it's valid
  const numAmount = parseInt(cleanAmount, 10);
  if (isNaN(numAmount)) {
    return "Invalid input";
  }

  // Add commas to the number
  const formattedAmount = numAmount.toLocaleString("en-US");

  // Combine with a dollar sign
  return `$${formattedAmount}`;
};
