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
