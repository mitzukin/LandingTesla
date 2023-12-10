// Layout.jsx
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowRoundBack } from "react-icons/io";

const Layout = () => {
  const [isToggleOpen, setToggleOpen] = useState(false);

  const toggleMenu = () => {
    setToggleOpen(!isToggleOpen);
  };

  return (
    <>
      <div className="sticky top-0  bg-primary shadow-md z-10">
      <nav className="md:flex hidden items-center justify-between mx-12 xl:mx-56 py-4 desktop">
        <div>
          <ul className="flex gap-10 items-center  font-Roboto text-tertiary">
            <li>
              <Link to="/" className="text-lightYellow duration-300">
                ACCESSORIES
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-lightYellow duration-300">
                BRAND
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-lightYellow duration-300">
                EXPERIENCE
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <img src={Logo} alt="Logo" className="logo  xl:-translate-x-10" />
        </div>
        <div>
          <ul className="flex gap-10 font-Roboto text-tertiary">
            <li>
              <Link to="/" className="hover:text-lightYellow duration-300">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-lightYellow duration-300">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-lightYellow duration-300">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      <nav className="flex fixed z-10 md:hidden w-full items-center justify-between    bg-primary">
        <div
          className={`flex p-5 flex-col  items-start ${
            isToggleOpen ? "h-screen bg-primary  w-screen"  : "bg-primary"
          }`}
        >
          {!isToggleOpen ? (
            <GiHamburgerMenu
              className="text-white   cursor-pointer"
              size={20}
              onClick={toggleMenu}
            />
          ) : (
            <div className="flex w-full mb-10  justify-between ">
              <IoIosArrowRoundBack
                className="text-white  cursor-pointer"
                size={24}
                onClick={toggleMenu}
              />
              <img src={Logo} alt="Logo" className="logo h-8 w-8" />
            </div>
          )}

          {isToggleOpen && (
            <ul className="flex flex-col  gap-10 font-Roboto text-tertiary">
              <li>
                <Link to="/" className="hover:text-lightYellow duration-300">
                  ACCESSORIES
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-lightYellow duration-300">
                  BRAND
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-lightYellow duration-300">
                  EXPERIENCE
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-lightYellow duration-300">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-lightYellow duration-300">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-lightYellow duration-300">
                  CONTACT
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div>
          <img
            src={Logo}
            alt="Logo"
            className={`logo p-5 ${isToggleOpen ? "hidden" : ""}`}
          />
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
