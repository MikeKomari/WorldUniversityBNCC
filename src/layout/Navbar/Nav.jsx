import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function NavList() {
  return (
    <ul className="ml-6 my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to={"/"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Home
          </a>
        </Typography>
      </Link>
      <Link to={"/search"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Search
          </a>
        </Typography>
      </Link>
      <Link to={"/about"}>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            About
          </a>
        </Typography>
      </Link>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto flex justify-between    px-6 py-3">
      <div className="flex items-center text-blue-gray-900">
        <Link to={"/"}>
          {/* <img
            className="w-10 h-10 rounded-full mr-2"
            src="/assets/_277ffcd6-b7b6-4a79-b760-3c0b84d5d7af.jpeg"
            alt=""
          /> */}
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            WORLDUNIVERSITY
          </Typography>
        </Link>
        <div className=" items-center hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
      </Collapse>
      <div className="items-center flex ">
        <input
          type="text"
          placeholder="Get Started"
          className="text-black w-5/6 outline-none border border-gray-900 mr-3 rounded-full pl-2"
        />
        <button className="text-black h-6 w-6 rounded-full border-gray-900 border">
          &#9992;
        </button>
      </div>
    </Navbar>
  );
}
