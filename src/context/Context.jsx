import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AppContext = createContext();

function ContextProvider(props) {
  const [loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountryData(response.data);
      } catch (error) {
        navigate("/error", {
          state: {
            status: error.response?.status,
            msg: error.response?.message,
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const contextData = { loading, countryData };

  return (
    <div>
      <AppContext.Provider value={contextData}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
}

export default ContextProvider;
