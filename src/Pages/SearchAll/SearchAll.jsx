import React, { useContext, useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import Context from "../../context/Context";

import { AppContext } from "../../context/Context";

import Independency from "./Independency";
import MiniCountry from "./MiniCountry";
import CountriesList from "./CountriesList";
import { SelectDropdown } from "../../components/SelectDropdown";

function SearchAll() {
  const [independentActive, setIndependentActive] = useState(false);
  const [dependentActive, setDependentActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("name");

  const { loading, countryData } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);

  const inputRef = useRef(null);

  const handleIndependencyClick = () => {
    if (independentActive) {
      setIndependentActive(false);
    } else {
      setIndependentActive(true);
      setDependentActive(false);

      // handleFilterData();
    }
  };

  const handleDependencyClick = () => {
    if (dependentActive) {
      setDependentActive(false);
    } else {
      setDependentActive(true);
      setIndependentActive(false);

      // handleFilterData();
    }
  };

  const handleCategoryChange = (v) => {
    // console.log(selectedCategory);
    setSelectedCategory(v);
  };

  const handleFilterData = () => {
    const inputFilter = inputRef.current.value.toLowerCase();

    let filteredDataTemp = countryData || [];

    if (independentActive) {
      filteredDataTemp = filteredDataTemp.filter((c) => c.independent);
    }
    if (dependentActive) {
      filteredDataTemp = filteredDataTemp.filter((c) => !c.independent);
    }

    if (selectedCategory === "name") {
      filteredDataTemp = filteredDataTemp.filter((c) =>
        c.name.common.toLowerCase().includes(inputFilter)
      );
    }
    if (selectedCategory === "region") {
      filteredDataTemp = filteredDataTemp.filter((c) =>
        c.region.toLowerCase().includes(inputFilter)
      );
    }

    if (selectedCategory === "ascending") {
      filteredDataTemp = filteredDataTemp.sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      );
    }

    if (selectedCategory === "descending") {
      filteredDataTemp = filteredDataTemp.sort((a, b) =>
        b.name.common.localeCompare(a.name.common)
      );
    }

    if (selectedCategory === "all") {
      filteredDataTemp = countryData;
    }

    if (selectedCategory === "lang") {
      filteredDataTemp = filteredDataTemp.filter((c) => {
        if (!inputFilter) {
          return true;
        }

        if (!c.languages) {
          return false;
        }

        // Get the code
        const firstLangCode = Object.keys(c.languages)[0];

        if (!firstLangCode || !c.languages[firstLangCode]) {
          return false;
        }

        // Get the name
        const languageName = c.languages[firstLangCode];

        // Check if the language name includes the filter input
        return languageName.toLowerCase().includes(inputFilter);
      });
    }
    setFilteredData(filteredDataTemp);
  };

  useEffect(() => {
    handleFilterData();
  }, [countryData, independentActive, dependentActive, selectedCategory]);

  return (
    <>
      <div className="px-6 mt-8">
        <h1 className="text-4xl text-center">Start Searching Now!</h1>
        <div className="h-1 w-full bg-gray-100 mt-4"></div>

        <div className="flex items-center gap-3 mt-4">
          <p className="text-xl">Filters: </p>
          <button onClick={handleIndependencyClick}>
            <Independency isActive={independentActive} />
          </button>
          <button onClick={handleDependencyClick}>
            <Independency status="Dependant" isActive={dependentActive} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between mb-4">
          <div className="flex items-center ">
            <p className="mr-3">Name:</p>
            <input
              className="border-2 w-full max-w-[500px] pl-2"
              type="text"
              ref={inputRef}
              name=""
              id=""
              placeholder="Search By Category"
              onInput={handleFilterData}
            />
          </div>
          <div>
            <SelectDropdown
              onChangeCategory={handleCategoryChange}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>

        <CountriesList filteredData={filteredData} />
      </div>
    </>
  );
}

export default SearchAll;
