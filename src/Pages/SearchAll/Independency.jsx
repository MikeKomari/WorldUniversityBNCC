import React from "react";

function Independency({ status = "Independent", isActive = false }) {
  return (
    <div
      className={
        isActive
          ? "text-sm font-light py-1 px-4 border-2 border-gray-800 rounded-full bg-gray-800 text-white transition-all"
          : "text-sm font-light py-1 px-4 border-2 border-gray-800 rounded-full transition-all"
      }
    >
      {status}
    </div>
  );
}

export default Independency;
