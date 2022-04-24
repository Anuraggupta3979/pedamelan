import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" px-3   justify-around m-auto pt-5 w-11/12 md:w-4/5  ">
      {/* <div className="justify-around m-auto w-11/12 md:w-4/5"> */}
        <div className="w-full order-2  lg:order-1">
          <hr className="text-bodyColor mb-2 mt-5" />
        </div>
        <div className="flex flex-auto mt-3 mb-3 order-3  md:order-2 text-center md:text-left justify-between md:justify-start">
          <p className="text-urlColor font-GwpRegular text-sm  md:text-base  m-auto">
            &copy; Pedamelan, All Right Reserved &nbsp;{" "}
            <Link href="/about">SITEMAP</Link>
          </p>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
