import React, { useState } from "react";



import { Link } from "react-router"
import TextScrambleComponent from "../../components/common-components/ScrambleText"
import { PiDotsThreeOutlineFill } from "react-icons/pi"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className=" mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <Link to="/">
              <TextScrambleComponent />
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center md:gap-4 lg:gap-6 xl:gap-10 ">
              <li className=" cursor pointer">
                <Link
                  to="/"
                  className="nav-li-css h-full text-[20px] px-4 text-white font-headerFont md:text-[23px] lg:text-[30px] transition-all  "
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutPage"
                  className=" nav-li-css h-full text-[20px] px-4  text-white font-headerFont md:text-[23px] lg:text-[30px] transition-all  "
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="/servicePage"
                  className=" nav-li-css h-full text-[20px] px-4  text-white font-headerFont md:text-[23px] lg:text-[30px] transition-all  "
                >
                  services
                </Link>
              </li>
              <li>
                <Link
                  to="/projectsPage"
                  className=" nav-li-css h-full text-[20px] px-4  text-white font-headerFont md:text-[23px] lg:text-[30px] transition-all "
                >
                  demo
                </Link>
              </li>
              <li>
                <Link
                  to="/contactPage"
                  className=" text-[20px] h-full px-2 text-white font-headerFont bg-brandColor transition-all hover:text-black md:text-[23px] lg:text-[30px]"
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
                className=" block px-4 py-2 text-[30px] w-full text-white font-headerFont  bg-primaryColor rounded nav-custom-shadow active:bg-brandColor focus:text-brandColor"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutPage"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont bg-primaryColor rounded nav-custom-shadow active:bg-brandColor focus:text-brandColor"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="/servicePage"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont bg-primaryColor rounded nav-custom-shadow active:bg-brandColor focus:text-brandColor"
              >
                services
              </Link>
            </li>
            <li>
              <Link
                to="/projectsPage"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont bg-primaryColor rounded nav-custom-shadow active:bg-brandColor focus:text-brandColor"
              >
                demo
              </Link>
            </li>
            <li>
              <Link
                to="/contactPage"
                className="bg-red-600 block w-full px-4 py-2 text-[30px] font-headerFont text-white  rounded transition-all active:bg-primaryColor transition-all hover:text-black "
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

export default NavBar;
