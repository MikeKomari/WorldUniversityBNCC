import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DetailSkeleton() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <Skeleton variant="rectangle" animation="wave" width={600} height={450} />

      <div>
        <Skeleton
          variant="text"
          animation="wave"
          height={28}
          sx={{ fontSize: "8rem" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="gap-4 ">
            <Skeleton
              className="mt-4"
              variant="text"
              animation="wave"
              sx={{ fontSize: "2rem" }}
            />
            <Skeleton
              variant="text"
              className="mt-4"
              animation="wave"
              sx={{ fontSize: "2rem" }}
            />
            <Skeleton
              variant="text"
              className="mt-4"
              animation="wave"
              sx={{ fontSize: "2rem" }}
            />
            <Skeleton
              variant="text"
              className="mt-4"
              animation="wave"
              sx={{ fontSize: "2rem" }}
            />
            <Skeleton
              className="mt-4"
              variant="text"
              animation="wave"
              sx={{ fontSize: "2rem" }}
            />
          </div>
          <div>
            <Skeleton
              variant="text"
              className="mt-4"
              animation="wave"
              sx={{ fontSize: "2rem" }}
            />
            <Skeleton
              className="mt-4"
              variant="text"
              animation="wave"
              sx={{ fontSize: "2rem" }}
            />
            <Skeleton
              className="mt-4"
              variant="text"
              animation="wave"
              sx={{ fontSize: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSkeleton;
