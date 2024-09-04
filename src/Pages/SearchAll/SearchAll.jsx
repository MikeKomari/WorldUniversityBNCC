import React, { useContext, useRef, useState } from "react";
import Loader from "./Loader";
import Context from "../../context/Context";

import Independency from "./Independency";
import MiniCountry from "./MiniCountry";
import CountriesList from "./CountriesList";
import { SelectDropdown } from "../../components/SelectDropdown";

function SearchAll() {
  const [independentActive, setIndependentActive] = useState(false);
  const [dependentActive, setDependentActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const inputRef = useRef(null);

  const handleIndependencyClick = () => {
    if (independentActive) {
      setIndependentActive(false);
    } else {
      setIndependentActive(true);
      setDependentActive(false);
    }
  };

  const handleDependencyClick = () => {
    if (dependentActive) {
      setDependentActive(false);
    } else {
      setDependentActive(true);
      setIndependentActive(false);
    }
  };

  const handleCategoryChange = (v) => {
    // console.log(selectedCategory);
    setSelectedCategory(v);
  };

  function tempDesu() {
    console.log(inputRef.current.value);
  }

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
              onInput={tempDesu}
            />
          </div>
          <div>
            <SelectDropdown onChangeCategory={handleCategoryChange} />
          </div>
        </div>

        <CountriesList
          independentActive={independentActive}
          dependentActive={dependentActive}
          category={selectedCategory}
          inputRef={inputRef}
        />
      </div>
    </>
  );
}

export default SearchAll;
