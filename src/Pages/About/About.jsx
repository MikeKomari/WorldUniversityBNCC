import React from "react";
import GetStarted from "../../components/Button/GetStarted";

function About() {
  return (
    <div className="mx-auto max-w-screen-2xl mt-24 flex items-center flex-col">
      <h1 className="text-2xl text-center text-bold md:text-5xl mb-12">
        Helping Users To Wonder Around The World
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl text-gray-600 mb-6 ">About Us</h1>
            <p className="w-[300px] text-center mb-4">
              WorldUniversity, an innovative platform developed by PT World
              University to provide detailed information about countries around
              the globe. We are committed to making global data exploration
              straightforward and accessible, offering up-to-date information on
              countries, their flags, geographical locations, and more. Our goal
              is to empower users with the knowledge they need to better
              understand the world around them.
            </p>
            <GetStarted />
          </div>
        </div>
        <div>
          <img src="assets/japan1.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
