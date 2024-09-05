import React, { useEffect } from "react";
import { NavbarSimple } from "../../layout/Navbar/Nav";
import axios from "axios";
import Carousel from "../../components/Carousel";
import { useNavigate } from "react-router-dom";
import GetStarted from "../../components/Button/GetStarted";
import { AccordionDemo } from "../../components/Accordion";

function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl mt-24 flex items-center flex-col">
        <h1 className="text-2xl text-center text-bold md:text-5xl mb-12">
          TRAVEL THE WORLD WITH WORLD UNIVERSITY
        </h1>
        <GetStarted />
      </div>
      <Carousel />
    </>
  );
}

export default Home;
