import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={ref}
      className="p-3 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-110 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt="Thumbnail"
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <h2 className="mt-1 text-3xl text-white font-medium transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="truncate max-w-md font-thin">{result.overview}</p>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.release_date || result.first_air_date} •{" "}
          <StarIcon className="h-5 mx-2 text-yellow-300" />{" "}
          {result.vote_average}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
