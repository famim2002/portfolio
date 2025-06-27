import React, { useState } from "react";

import { Link } from "react-router";

import { PiDotsThreeOutlineFill } from "react-icons/pi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className=" bg-[#0000002b] mx-auto px-6 py-6 border-b-1 border-[#ffffff4e]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[25px] font-bold text-white bg-[#000000bf] font-headerFont">
              famim hayat
            </h2>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center md:gap-4 lg:gap-6 xl:gap-10 ">
              <li className=" cursor pointer">
                <Link
                  to="/"
                  className="nav-li-css h-full text-[20px] px-4 bg-[#00000040]  hover:bg-[#00000080] text-[#ffffff]  font-headerFont md:text-[23px] lg:text-[30px] transition-all  "
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className=" nav-li-css h-full text-[20px] px-4 bg-[#00000040] hover:bg-[#00000080] text-white font-headerFont md:text-[23px] lg:text-[30px] transition-all  "
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className=" nav-li-css h-full text-[20px] px-4 bg-[#00000040] hover:bg-[#00000080] text-white font-headerFont md:text-[23px] lg:text-[30px] transition-all  "
                >
                  services
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className=" nav-li-css h-full text-[20px] px-4 bg-[#00000040] hover:bg-[#00000080] text-white font-headerFont md:text-[23px] lg:text-[30px] transition-all "
                >
                  demo
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className=" text-[20px] h-full px-2 text-white font-headerFont  bg-[#00000040]  transition-all  hover:bg-textColor   hover:text-primaryColor md:text-[23px] lg:text-[30px] "
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="cursor-pointer outline-none mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <PiDotsThreeOutlineFill className="text-[35px] text-white" />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "" : "hidden"} md:hidden`}>
          <ul className=" my-4 space-y-4">
            <li>
              <Link
                to="/"
                className=" block px-4 py-2 text-[30px] w-full bg-[#000000b7] text-white font-headerFont   rounded nav-custom-shadow active:bg-black focus:text-brandColor"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont bg-[#000000b7] rounded nav-custom-shadow active:bg-black focus:text-brandColor"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont bg-[#000000b7] rounded nav-custom-shadow active:bg-black focus:text-brandColor"
              >
                services
              </Link>
            </li>
            <li>
              <Link
                to="/demo"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont bg-[#000000b7] rounded nav-custom-shadow active:bg-black focus:text-brandColor"
              >
                demo
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-black block w-full px-4 py-2 text-[30px] font-headerFont text-white  rounded  active:bg-primaryColor transition-all hover:text-white "
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
