import React from "react";
import Independency from "./Independency";
import { IoIosMan } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
import { TbChartArcs, TbChartArea } from "react-icons/tb";
import { IoLanguageOutline } from "react-icons/io5";

function MiniCountry({
  flagURL,
  name,
  independent,
  population,
  region,
  capital,
  territory,
  language,
}) {
  return (
    <div className="border-2 flex flex-col justify-between p-2">
      <img
        className="w-[300px] h-[200px] object-cover bg-center"
        src={flagURL}
        alt=""
      />

      <div className="pt-4 flex items-center justify-between">
        <p className="text-2xl">{name}</p>
        {independent ? <Independency /> : ""}
      </div>

      <div className="pt-4 ">
        <div className="flex items-center ">
          <IoIosMan />
          <p className="pr-2">Population: </p>
          <p className="text-gray-800">{population.toLocaleString()}</p>
        </div>

        <div className="flex items-center ">
          <MdOutlinePlace />
          <p className="pr-2">Region: </p>
          <p className="text-gray-800">{region}</p>
        </div>

        <div className="flex items-center ">
          <CiFlag1 />
          <p className="pr-2">Capital: </p>
          <p className="text-gray-800">{capital}</p>
        </div>

        <div className="flex items-center ">
          <TbChartArea />
          <p className="pr-2">Territory: </p>
          <p className="text-gray-800">{territory}</p>
        </div>
        {/* <div className="flex items-center ">
          <IoLanguageOutline />
          <p className="pr-2">Language: </p>
          <p className="text-gray-800">{language}</p>
        </div> */}
      </div>

      <div>
        <button className="w-full py-2 px-4 border-2 rounded-full mt-4 border-gray-800">
          Details
        </button>
      </div>
    </div>
  );
}

export default MiniCountry;
