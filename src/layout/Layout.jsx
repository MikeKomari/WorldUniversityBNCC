import React, { Children } from "react";
import { NavbarSimple } from "./Navbar/Nav";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <NavbarSimple />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
