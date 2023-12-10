import React from "react";
import Logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";
import Send from "../Assets/Send.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="xl:px-56 font-Roboto">
      <div className="flex flex-col md:flex-row p-5 gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="" />
            <p className=" tracking-[0.5rem] font-Roboto  text-tertiary font-semibold ">
              THE TESLA
            </p>
          </div>
          <p className="text-tertiary text-sm ">
            Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has
            been the industry's{" "}
          </p>
        </div>

        <div className="flex  justify-center flex-col w-full gap-5  items-center">
          <div className="flex  w-full gap-10 justify-center">
            <div className="flex flex-col  gap-5">
              <Link className=" text-tertiary hover:text-lightYellow ">
                ACCESSORIES
              </Link>

              <a href="" className="text-secondary text-sm">
                Lorem Ipsum
              </a>
              <a href="" className="text-secondary text-sm">
                Lorem Ipsum
              </a>
              <a href="" className="text-secondary text-sm">
                Lorem Ipsum
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <Link className=" text-tertiary hover:text-lightYellow text-center">
                BRAND
              </Link>

              <a href="" className="text-secondary text-sm">
                Lorem Ipsum
              </a>
              <a href="" className="text-secondary text-sm">
                Lorem Ipsum
              </a>
              <a href="" className="text-secondary text-sm">
                Lorem Ipsum
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <Link className=" text-tertiary hover:text-lightYellow ">
                EXPERIENCE
              </Link>

              <a href="" className="text-secondary text-sm">
                Lorem Ipsum
              </a>
              <a href="" className="text-secondary text-sm">
                Lorem Ipsum
              </a>
              <a href="" className="text-secondary text-sm">
                Lorem Ipsum
              </a>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Email Message..."
              className="w-[250px] h-[36px] px-2 py-2 text-xs bg-tertiary"
            />
            <form action="">
              <button className="absolute bg-lightYellow p-2.5 top-0 text-xs right-0">
                Send
              </button>
            </form>
          </div>
          <p className="text-secondary mb-10 text-sm">
            {" "}
            Lorem Ipsum has been the industry's{" "}
          </p>
        </div>
        <div className="lg:w-1/4 font-Roboto  gap-5  flex flex-col justify-start items-start">
          <h1 className="text-tertiary ">GET IN TOUCH</h1>
          <p className="text-secondary">Lorem Ipsum has been the industry's </p>
          <div className="flex gap-5">
            {Social.map((socialitems, index) => (
              <div key={index} className="md:flex gap-2 items-center hidden">
                <socialitems.icon className="text-lightGreen " />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-5 md:justify-between text-secondary text-sm">
        <p> Lorem Ipsum has been the industry's </p>
        <p>2023 All Rights Reserved</p>
        <p>Terms of Services</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

const Social = [
  {
    icon: FaFacebook,
  },
  {
    icon: FaTwitter,
  },
  {
    icon: FaLinkedin,
  },
];

export default Footer;
