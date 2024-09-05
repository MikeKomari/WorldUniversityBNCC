import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DetailSkeleton from "./DetailSkeleton";

function Detail() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="mx-6 my-12 ">
      <button onClick={goBack}>
        <div className="flex items-center px-4 py-2 border-2 shadow-sm">
          <FaArrowLeft />
          <p className="pl-2">BACK</p>
        </div>
      </button>

      {/* <DetailSkeleton /> */}

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <img className="w-[600px] h-[450px] " src="assets/9318694.jpg" alt="" />

        <div>
          <p className="text-3xl">Indonesia</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="gap-4 ">
              <p className="mt-4">Native Name: </p>
              <p className="mt-4">Population: </p>
              <p className="mt-4">Region: </p>
              <p className="mt-4">Sub Region: </p>
              <p className="mt-4">Capital: </p>
            </div>
            <div>
              <p className="mt-4">Top Level Domain: </p>
              <p className="mt-4">Currencies: </p>
              <p className="mt-4">Languages: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
