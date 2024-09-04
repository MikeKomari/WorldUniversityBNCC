import React from "react";
import { useLocation } from "react-router-dom";

function Error() {
  const location = useLocation();
  const errorMsg = location.state?.status;
  const errorCode = location.state?.msg;

  return (
    <div className=" flex items-center mx-12">
      <img className="w-2/3" src="assets/9318694.jpg" alt="" />
      <div>
        <h1 className="text-black text-5xl ">Oops! Something went wrong!</h1>
        <p className="text-black font-thin w-5/6 text-xl pt-5">
          Please double-check the country name or the URL and try again. If the
          problem persists, feel free to contact our support team for
          assistance.
        </p>
        <p className="text-black pt-5">
          {errorMsg ? errorMsg : "Page Not Found"} {errorCode ? errorCode : 404}
        </p>
      </div>
    </div>
  );
}

export default Error;
