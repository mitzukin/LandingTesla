import React from "react";
import Wheel from "../Assets/Wheel.png";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";

Link;
const About = () => {
  const items = Content[1];

  return (
    <div className="my-32">
      <div className="xl:px-56 px-5">
        <div className="lg:w-3/4">
          <h1 className=" text-tertiary font-Shanti text-4xl md:text-7xl ">
            {items.Title}
          </h1>
          <p className="text-secondary lg:w-3/4 mt-2 font-Roboto text-sm">
            Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has
            been the industry's standard dummy Lorem Ipsum has been the
            industry's standard dummy Lorem Ipsum has been the industry's
            standard dummy{" "}
          </p>
        </div>
        <div className="mt-20 flex flex-col gap-10 lg:flex-row">
          <div className="xl:w-1/2">
            <h1 className=" text-tertiary font-Shanti text-4xl md:text-5xl ">
              {items.Title}
            </h1>
            <p className="text-secondary lg:w-3/4 mt-2 font-Roboto text-sm">
              {items.paragraph}
            </p>

            <div className="flex flex-col relative justify-end items-end">
              <img src={Wheel} alt="" className="" />
              <div className="py-3 absolute left-0 hover:scale-110 duration-500 button   px-10 flex  justify-center gap-1 w-[170px] bg-lightGreen rounded-r-full ">
                <Link className=" font-semibold  text-xs  text-center ">
                  Learn More{" "}
                </Link>
                <IoMdArrowRoundForward />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 py-8 mt-10 lg:mt-0 xl:grid-cols-2 gap-2 xl:w-1/2">
            <div className="p-5 card xl:col-span-2 flex flex-col rounded-lg items-start justify-end bg-Card">
              <h1 className="text-tertiary text-4xl mb-2">
                Lorem <br /> Ipsum{" "}
              </h1>
              <p className="text-secondary text-sm mb-4">
                Lorem Ipsum has been the industry's standard dummy Lorem Ipsum
                has been the industry's standard dummy Lorem Ipsum has been the
                industry's standard dummy Lorem Ipsum has been the industry's
                standard dummy{" "}
              </p>
              <Link className="font-semibold rounded-sm bg-lightYellow w-[120px] px-5 py-3 text-xs text-center">
                Explore
              </Link>
            </div>

            <div className="p-5 flex  flex-col card justify-between bg-Card rounded-lg">
              <div className="flex items-center gap-5 ">
                <Link>
                  <FaArrowCircleRight className="text-lightGreen text-2xl hover:scale-110 duration-300" />
                </Link>
                <p className="text-secondary">Lorem ipsum dummy</p>
              </div>
              <div>
                <h1 className="text-tertiary text-4xl my-2">
                  Lorem Ipsum <br />
                  has been{" "}
                </h1>
                <p className="text-secondary text-sm mb-4">
                  Lorem Ipsum has been the industry's standard dummy
                </p>
              </div>
            </div>
            <div className="p-5 flex  flex-col card justify-between bg-Card rounded-lg">
              <div>
                <h1 className="text-tertiary font-medium text-3xl my-2">
                  Lorem Ipsum <br />
                  has been{" "}
                </h1>
                <p className="text-secondary text-sm mb-4">
                  Lorem Ipsum has been the industry's standard dummy
                </p>
              </div>
              <div className="flex items-center gap-5 ">
                <Link>
                  <FaArrowCircleRight className="text-lightGreen text-2xl hover:scale-110 duration-300" />
                </Link>
                <p className="text-secondary">Lorem </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = [
  {
    Title: "Lorem Ipsum has been the industry's standard dummy ",
    paragraph:
      "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy ",
  },
  {
    Title: "Lorem Ipsum has been the industry's standard dummy ",
    paragraph: "Lorem Ipsum has been the industry's ",
  },
  {
    Title: "Lorem Ipsum ",
    paragraph:
      "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy ",
  },
  {
    Title: "Lorem Ipsum has been ",
    paragraph: "Lorem Ipsum has been the industry's standard dummy ",
  },
  {
    Title: "Lorem  ",
    paragraph: "Lorem Ipsum has been the industry's standard dummy ",
  },
];
export default About;
