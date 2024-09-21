export interface Photo {
  dataSourceId: number;
  displayLevel: number;
  fileName: string;
  height: number;
  photoId: number;
  photoType: string;
  photoUrls: {
    fullScreenPhotoUrl: string;
    lightboxListUrl: string;
    nonFullScreenPhotoUrl: string;
    nonFullScreenPhotoUrlCompressed: string;
  };
  subdirectory: string;
  thumbnailData: {
    thumbnailUrl: string;
  };
  width: number;
}
