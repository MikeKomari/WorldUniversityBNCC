import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Context";
import MiniCountry from "./MiniCountry";
import { useInView } from "react-intersection-observer";
import SkeletonMiniCountry from "./SkeletonMiniCountry";
import getColumnCount from "./../../utils";

function CountriesList({ filteredData }) {
  const { loading, countryData } = useContext(AppContext);
  const [visibleCount, setVisibleCount] = useState(8);
  let wasVisibleCount = 4;

  // const { ref, inView } = useInView({
  //   threshold: 0.1, // Trigger when 10% of the target is visible
  //   triggerOnce: false, // Allow multiple triggers
  // });

  // useEffect(() => {
  //   if (inView) {
  //     setVisibleCount((p) => p + 20);
  //   }
  // }, [inView]);

  //Scrolling

  const adjustVisibleCount = () => {
    const columns = getColumnCount();
    const itemsToShow = Math.ceil(visibleCount / columns) * columns;
    setVisibleCount(itemsToShow);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      wasVisibleCount = visibleCount;
      setVisibleCount((p) => p + 8);
    }
  };

  useEffect(() => {
    adjustVisibleCount(); // Ensure initial count is a multiple of columns
    window.addEventListener("resize", adjustVisibleCount);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", adjustVisibleCount);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleCount]);

  if (filteredData.length === 0) {
    return (
      <div>
        <h1 className="text-3xl text-center">
          No Countries were Found From your Input
        </h1>
        <p className="text-center">Please re-check your input and try again.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 xl:grid-cols-4 md:grid-cols-3">
      {loading
        ? Array.from({ length: visibleCount }).map((_, index) => (
            <SkeletonMiniCountry key={index} />
          ))
        : filteredData
            .slice(0, visibleCount)
            .map((d, index) => (
              <MiniCountry
                key={index}
                flagURL={d.flags.png}
                name={d.name.common}
                independent={d.independent}
                population={d.population}
                region={d.region}
                capital={d.capital}
                territory={d.area}
                code={d.cca2}
              />
            ))}
      {filteredData &&
        visibleCount < countryData.length &&
        Array.from({ length: getColumnCount() }).map((_, index) => (
          <SkeletonMiniCountry key={index} />
        ))}
    </div>
  );
}

export default CountriesList;
