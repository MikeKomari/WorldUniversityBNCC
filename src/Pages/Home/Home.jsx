import React, { useEffect } from "react";
import { NavbarSimple } from "../../layout/Navbar/Nav";
import axios from "axios";

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        console.log("done");
      }
    };

    fetchData();
  }, []);

  return <h1>asu</h1>;
}

export default Home;
