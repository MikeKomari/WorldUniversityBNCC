import React from "react";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const navigate = useNavigate();
  function goToSearch() {
    navigate("/search");
  }
  return (
    <div>
      <button
        onClick={() => {
          goToSearch();
        }}
        className=" text-xl md:text-2xl px-4 py-2 border-2 bg-gray-800 text-white rounded-full text-center"
      >
        Get Started
      </button>
    </div>
  );
}

export default GetStarted;
