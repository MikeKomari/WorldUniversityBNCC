import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DetailSkeleton from "./DetailSkeleton";
import axios from "axios";
import Independency from "../SearchAll/Independency";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Map from "../../components/Map";

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [countryDetail, setCountryDetail] = useState([]);
  const countryCode = location.state?.code;
  const position = countryDetail.latlng;

  if (!countryCode) throw new Error("No Country with this code!");

  const goBack = () => {
    navigate(-1);
  };

  //Data Fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        setCountryDetail(response.data[0]);
      } catch (error) {
        navigate("/error", {
          state: {
            status: error.response?.status,
            msg: error.response?.message,
          },
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [countryCode, navigate]);

  //Get the language

  function getArrayDataObject(category) {
    let temp;

    // Access the first key of the category object dynamically
    const temp2 = Object.keys(countryDetail[category])[0];

    if (!temp2 || !countryDetail[category][temp2]) {
      temp = "none";
    } else {
      // Get the value corresponding to the first key of the category object
      temp = countryDetail[category][temp2];
    }

    return temp;
  }

  console.log(position);
  return (
    <>
      <div className=" my-12 max-w-screen-2xl mx-auto">
        <button onClick={goBack}>
          <div className="flex items-center px-4 py-2 border-2 shadow-sm">
            <FaArrowLeft />
            <p className="pl-2">BACK</p>
          </div>
        </button>

        {isLoading ? (
          <DetailSkeleton />
        ) : (
          <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center justify-center">
            <img
              className="w-[800px] h-[450px] "
              src={countryDetail.flags.png}
              alt=""
            />
            <div>
              <p className="text-3xl">{countryDetail.name.common}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="gap-4 ">
                  <p className="mt-4">
                    Native Name: {countryDetail.name.official}
                  </p>
                  <p className="mt-4">Population: {countryDetail.population}</p>
                  <p className="mt-4">Region: {countryDetail.region}</p>
                  <p className="mt-4">
                    {countryDetail.subregion && (
                      <p className="mt-4">
                        Sub Region: {countryDetail.subregion}
                      </p>
                    )}
                  </p>
                  <p className="mt-4">Capital: {countryDetail.capital[0]}</p>
                </div>
                <div>
                  <p className="mt-4">
                    Top Level Domain: {countryDetail.tld[0]}
                  </p>
                  <p className="mt-4">
                    Currencies:{" "}
                    {Object.values(countryDetail.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </p>
                  <p className="mt-4">
                    Languages:{" "}
                    {Object.values(countryDetail.languages).join(", ")}
                  </p>
                  {countryDetail.independent ? <Independency /> : ""}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Coordinates in map using latlng*/}
      {/* didnt work for some reason */}
      {/* <Map position={position} /> */}
    </>
  );
}

export default Detail;
