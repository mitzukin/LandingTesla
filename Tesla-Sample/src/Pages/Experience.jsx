import React from "react";
import Inside from "../Assets/Inside.png";
import Back from "../Assets/Back.png";
import { Link } from "react-router-dom";
const Experience = () => {
  return (
    <div className="px-5 lg:px-0 pt-10 font-Roboto ">
      <div className="flex justify-between py-10 lg:px-56  text-tertiary">
        <p>LOREM</p>
        <p>Ipsum</p>
        <p>LOREM</p>
      </div>
      <div className="border-b border-white border-opacity-20 mb-10 "></div>
      <div className="lg:px-56 flex flex-col  gap-5  lg:flex-row mb-10">
        <div className="h-auto flex flex-col justify-between xl:w-1/3">
          <h1 className="text-xl font-thin text-tertiary ">Innovate</h1>
          <p className="text-secondary text-sm">
            {" "}
            Lorem Ipsum has been the industry's standard dummy standard dummy
            has been the industry's standard{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-tertiary text-6xl font-Shanti w-full">
            LOREM IPSUM HAS BEEN THE INDUSTRY’S
          </h1>
          <div className="flex items-center justify-center gap-2 my-10">
            <div className="relative">
              <img src={Back} alt="" className="" />
              <div className="absolute  hidden md:flex inset-0 bg-gradient-to-b from-transparent to-lightGreen opacity-0 hover:opacity-100">
                <p className="bottom-20 absolute font-Roboto px-5 text-primary">
                  {" "}
                  Lorem Ipsum has been the industry's standard dummy{" "}
                </p>
                <div className=" absolute bottom-5 left-0  flex  justify-center gap-1 w-[170px]  ">
                  <Link className=" py-3 font-semibold px-10  text-xs bg-tertiary rounded-r-full  text-center ">
                    Learn More{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={Inside} alt="" className="" />
              <div className="absolute hidden md:flex inset-0 bg-gradient-to-b from-transparent to-lightGreen opacity-0 hover:opacity-100">
                <p className="bottom-20 absolute font-Roboto px-5 text-primary">
                  {" "}
                  Lorem Ipsum has been the industry's standard dummy Lorem Ipsum
                  has been the industry's standard dummy{" "}
                </p>
                <div className=" absolute bottom-5 left-0 flex  justify-center gap-1 w-[170px]  ">
                  <Link className=" py-3 font-semibold  px-10  text-xs  text-center bg-tertiary rounded-r-full ">
                    Learn More{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-secondary text-sm">
            {" "}
            Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has
            been the industry's standard dummy{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
