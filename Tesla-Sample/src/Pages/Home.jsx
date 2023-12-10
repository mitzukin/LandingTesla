import React from "react";
import TeslaCar from "../Assets/TeslaCar.png";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import About from "./About";
import Experience from "./Experience";
import Footer from "../Components/Footer";

const Home = () => {
  const item = TeslaDef[0];
  return (
    <div className="pt-32 md:pt-0">
      <div className="  lg:pt-16 pt-5  lg:mt-10 font-Roboto mx-auto Hero   xl:w-[80rem]">
        <h1 className="text-md lg:text-xl text-center text-tertiary font-Roboto tracking-[0.2em] lg:tracking-[0.5em]">
          THE TESLA
        </h1>
        <div className="lg:tracking-[1.3em] tracking-[0.8em] lg:font-light text-lightYellow text-center text-xl lg:text-6xl mt-2">
          LIFESTYLE
        </div>
        <div className="mx-auto relative md:w-[500px]">
          <img src={TeslaCar} alt="" />
          <div className="absolute text-left flex items-end flex-col top-5  xl:top-20  right-5 xl:-right-32 md:w-[200px] text-tertiary">
            <h1 className="text-xs text-lightGreen ">{item.title}</h1>
            <p className="text-xs mt-1 text-left ">{item.paragraph}</p>
          </div>
          <div className="absolute top-40 hidden xl:flex flex-col xl:-left-32 w-[200px] text-tertiary">
            <h1 className="text-xs text-lightGreen ">{item.title}</h1>
            <p className="text-xs mt-1">{item.paragraph}</p>
          </div>
          <div className="absolute left-5 top-64 md:top-80 xl:left-80 w-[200px] text-tertiary">
            <h1 className="text-xs text-lightGreen">{item.title}</h1>
            <p className="text-xs mt-1">{item.paragraph}</p>
          </div>
        </div>
        <div className="py-3 button hover:scale-110 hover:translate-x-3 duration-300 -translate-y-5 xl:-translate-y-16 px-10 flex justify-center gap-1 w-[170px] bg-lightGreen rounded-r-full">
          <Link className=" font-semibold  text-xs  text-center ">
            Get Started
          </Link>
          <IoMdArrowRoundForward />
        </div>
      </div>
      <div className=" px-5 flex flex-col md:gap-2 lg:flex-row w-full font-Roboto items-center justify-between mt-7 xl:px-56 text-tertiary text-sm">
        <p className="text-xs">{item.paragraph}</p>
        <div className="flex gap-5">{Social.map((socialitems, index) => (
            <div key={index} className="md:flex gap-2 items-center hidden">
                <socialitems.icon className="text-lightGreen "/>
                <p>{socialitems.title}</p>
            </div>
        ))}</div>
        <p className="text-lg text-lightYellow ">Innovate</p>
      </div>
      <div className="mt-20">
      <About/>
      </div>
      <div className="mt-20">
      <Experience/>
      </div>
      <div className="mt-20">
      <Footer/>
      </div>
    </div>

  );
};
const TeslaDef = [
  {
    title: "Lorem Ipsum",
    paragraph: "Lorem Ipsum has been the industry's standard dummy  ",
  },
  {
    title: "Lorem Ipsum",
    paragraph: "Lorem Ipsum has been the industry's standard dummy  ",
  },
  {
    title: "Lorem Ipsum",
    paragraph: "Lorem Ipsum has been the industry's standard dummy  ",
  },
];

const Social = [
  {
    icon: FaFacebook,
    title: "Facebook",
  },
  {
    icon: FaTwitter,
    title: "Twitter",
  },
  {
    icon: FaLinkedin ,
    title: "Linked",
  },
  
];

export default Home;
