import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="max-w-xl mx-auto p-2 space-y-1">
      <header className="flex justify-between items-center mb-4">
        <Skeleton className="h-8 w-10" />
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-10 rounded-full" />
      </header>

      <div className="relative mb-4">
        <Skeleton className="w-full h-[320px] rounded-lg" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-6 w-32" />
        </div>
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-6 w-32" />
        </div>
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-6 w-32" />
        </div>
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-6 w-32" />
        </div>
      </div>

      {/* <Skeleton className="h-6 w-48 mb-4" /> */}

      <Skeleton className="h-6 w-48 mb-4 mx-auto" />

      <div className="flex gap-2">
        <Skeleton className="h-10 flex-grow" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
};

export default Loading;
