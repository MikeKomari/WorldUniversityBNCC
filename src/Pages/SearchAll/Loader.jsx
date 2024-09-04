import React, { useState, useEffect } from "react";

function Loader() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500); // Adjust the interval as needed

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return <div className="text-xl font-semibold">Loading{dots}</div>;
}

export default Loader;
