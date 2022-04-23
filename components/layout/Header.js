import React, { useState } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import CompassCalibrationSharpIcon from "@mui/icons-material/CompassCalibrationSharp";
import ErrorOutlineSharpIcon from "@mui/icons-material/ErrorOutlineSharp";
import SpokeSharpIcon from "@mui/icons-material/SpokeSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    console.log("toggle");
  };

  return (
    <div className="bg-bodyColor">
      <div className="flex w-full justify-between max-h-28 items-center px-6 md:px-20 py-3">
        <div className="flex text-center">
          <Link href="/">
            <a className="flex ">
              <CompassCalibrationSharpIcon className="text-activeButton bg-white px-1 origin-left py-1 text-4xl" />
              <span className="text-headingsColor ml-3 m-auto text-2xl">
                Pedamelan
              </span>
            </a>
          </Link>
        </div>
        <ul className="md:flex justify-center text-center  item-center hidden md:block">
          <li className="mx-5 my-0 md:my-8 md:text-sm xl:text-lg text-activeButton">
            <Link href="/">
              <a>
                <HomeSharpIcon /> Home
              </a>
            </Link>
          </li>

          <li className="mx-5 my-8 md:text-sm xl:text-lg text-urlColor">
            <Link href="/job-category">
              <a>
                <SpokeSharpIcon /> Job Category
              </a>
            </Link>
          </li>

          <li className="mx-5 my-8 md:text-sm xl:text-lg text-urlColor">
            <Link href="/company">
              <a>
                <StoreSharpIcon /> Comapny
              </a>
            </Link>
          </li>
          <li className="mx-5 my-8 md:text-sm xl:text-lg text-urlColor">
            <Link href="/about">
              <a>
                <ErrorOutlineSharpIcon /> About Us
              </a>
            </Link>
          </li>
          <li className=" md:text-sm xl:text-lg text-white bg-activeButton md:px-5 xl:px-10 py-3 rounded-xl m-auto">
            <Link href="/register">
              <a>Register account</a>
            </Link>
          </li>
        </ul>

        {/* menu icon show only in mobile view  */}

        <span
          onClick={toggleDrawer}
          className="cursor-pointer block md:hidden "
        >
          <img src="/assets/header/Toggle.svg" alt="Toggle" />
        </span>
      </div>

      {/* mobile view Drawer  */}
      <div>
        <Drawer
          open={isOpen}
          direction="left"
          style={{
            overflow: "scroll",
            width: "100vw",
            alignItems: "start",
            cursor: "pointer",
            background: "#f4f8fa",
            height: "100vh",
            flexWrap: "wrap",
            display: "block",
          }}
        >
          <div className="flex w-full justify-between  items-center px-6 md:px-20 pt-3 grey-background">
            <Link href="/">
              <a className="flex ">
                <CompassCalibrationSharpIcon className="text-activeButton bg-white px-1 origin-left py-1 text-4xl" />
                <span className="text-headingColor ml-3 m-auto text-2xl">
                  Pedamelan
                </span>
              </a>
            </Link>

            <span onClick={toggleDrawer} className="cursor-pointer">
              <img src="/assets/header/CloseToggle.svg" alt="Toggle" />
            </span>
          </div>
          <div className="flex w-full  px-5 pt-8 ">
            <div className="flex flex-col">
              <Link href="/">
                <a className="mt-3">
                  <HomeSharpIcon /> Home
                </a>
              </Link>

              <Link href="/job-category">
                <a className="mt-3">
                  <SpokeSharpIcon /> Job Category
                </a>
              </Link>

              <Link href="/company">
                <a className="mt-3">
                  <StoreSharpIcon /> Comapny
                </a>
              </Link>
              <Link href="/about">
                <a className="mt-3">
                  <ErrorOutlineSharpIcon /> About Us
                </a>
              </Link>

              <Link href="/register">
                <a className="text-lg text-white bg-activeButton px-10 py-3 rounded-xl mt-3">
                  Register account
                </a>
              </Link>
            </div>
          </div>
          <div className="md:flex w-full justify-between  items-center px-20 pt-3 md:mt-16">
            <div className="mt-12 md:mt-0 text-center w-full md:text-right">
              <div className=" mt-3 ">
                <Link href="tel:9546378059">
                  <a>+91 9546378059</a>
                </Link>
              </div>
              <div className=" font-GwpRegular mt-3">
                <Link href="mailto:info@pedamelan.com">
                  <a>info@pedamelan.com</a>
                </Link>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};
export default Header;
