import React, { useState } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { Link } from "react-router"
import TextScrambleComponent from "../componenets/home components/ScrambleText"


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className=" mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
           <Link to="/"><TextScrambleComponent/></Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center md:gap-4 lg:gap-6 xl:gap-10 ">
              <li className=" cursor pointer">
                <Link
                  to="/"
                  className="nav-li-css h-full text-[20px] px-4 text-white font-pixelFont md:text-[23px] lg:text-[30px] transition-all hover:text-black "
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className=" nav-li-css h-full text-[20px] px-4  text-white font-pixelFont md:text-[23px] lg:text-[30px] transition-all hover:text-black "
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className=" nav-li-css h-full text-[20px] px-4  text-white font-pixelFont md:text-[23px] lg:text-[30px] transition-all hover:text-black "
                >
                  services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className=" nav-li-css h-full text-[20px] px-4  text-white font-pixelFont md:text-[23px] lg:text-[30px] transition-all hover:text-black "
                >
                  demo
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className=" text-[20px] h-full px-2 text-white font-pixelFont bg-lightBrandColor hover:text-black md:text-[23px] lg:text-[30px]"
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
          <ul className="h-dvh mt-4 space-y-4">
            <li>
              <Link
                to="/"
                className=" block px-4 py-2 text-[30px] w-full text-white font-pixelFont  bg-primaryColor rounded nav-custom-shadow active:bg-lightBrandColor focus:text-lightBrandColor"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-[30px] w-full text-white font-pixelFont bg-primaryColor rounded nav-custom-shadow active:bg-lightBrandColor focus:text-lightBrandColor"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="block px-4 py-2 text-[30px] w-full text-white font-pixelFont bg-primaryColor rounded nav-custom-shadow active:bg-lightBrandColor focus:text-lightBrandColor"
              >
                services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block px-4 py-2 text-[30px] w-full text-white font-pixelFont bg-primaryColor rounded nav-custom-shadow active:bg-lightBrandColor focus:text-lightBrandColor"
              >
                demo
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-red-600 block w-full px-4 py-2 text-[30px] font-pixelFont text-white  rounded  active:bg-primaryColor transition-all hover:text-black "
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
