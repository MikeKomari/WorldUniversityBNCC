import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonMiniCountry() {
  return (
    <div className="border-2 flex flex-col justify-between px-2 pt-1">
      <Skeleton
        className="text-center"
        variant="rectangle"
        animation="wave"
        width={300}
        height={200}
      />

      <div className="pt-4 flex items-center justify-between">
        <Skeleton
          variant="text"
          animation="wave"
          width={100}
          sx={{ fontSize: "1.5rem" }}
        />
        <Skeleton
          variant="circle"
          className="rounded-full"
          animation="wave"
          width={110}
          height={32}
        />
      </div>

      <div className="pt-2 ">
        <Skeleton
          variant="text"
          animation="wave"
          width={150}
          sx={{ fontSize: "1.5rem" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={150}
          sx={{ fontSize: "1.5rem" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={150}
          sx={{ fontSize: "1.5rem" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={150}
          sx={{ fontSize: "1.5rem" }}
        />
      </div>

      <div>
        <Skeleton
          variant="circle"
          className="w-full py-2 px-4 border-2 rounded-full mt-2 mb-2"
          height={44}
        />
      </div>
    </div>
  );
}

export default SkeletonMiniCountry;
