import React from "react";

import FooterBg from "../assets/images/footerbg.png";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { imgArr } from "../App";

const Footer = () => {
  return (
    <footer
      id="footer"
      style={{
        backgroundImage: `url('${FooterBg}')`,
      }}
      className="py-8 px-6"
    >
      <div className="flex flex-col-reverse justify-between pb-8 md:pt-16 space-y-12 md:space-y-0 md:flex-row">
        <div className="md:flex md:ml-28 hidden md:flex-col space-y-6 md:mr-10">
          <h1 className="text-white font-bold  md:text-3xl">BFSI</h1>
        </div>

        <div className="flex md:flex-row gap-y-2 flex-col items-center justify-between m-auto md:gap-x-11 md:gap-y-0 md:mr-40">
          <input
            type="text"
            className="pl-3 text-sm placeholder:text-sm md:pr-32 py-1 rounded-sm focus:outline-none"
            placeholder="Your email"
          />
          <button className="text-white bg-lightBlue text-sm font-semibold py-1 px-12 rounded-sm hover:bg-black">
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-col md:py-20 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex md:ml-28 flex-col space-y-6 mr-2">
          <h1 className="max-w-md text-sm font-thin text-white text-center md:text-left">
            About
          </h1>
          <p className="max-w-sm text-center text-[#575657] md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="flex ml-16 flex-col space-y-6 mr-16">
          <h1 className="max-w-md text-sm font-thin text-white text-center md:text-left">
            Instagram
          </h1>
          <div className="space-y-1.5">
            <div className="flex flex-row space-x-1.5">
              {imgArr.map((item) => (
                <img
                  className="object-cover rounded-md h-12 w-14"
                  src={item}
                  alt=""
                />
              ))}
            </div>
            <div className="flex flex-row space-x-1.5">
              {imgArr.map((item) => (
                <img
                  className="object-cover rounded-md h-12 w-14"
                  src={item}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex md:ml-24  flex-col space-y-6 mr-2">
          <h1 className="max-w-md text-sm font-thin text-white text-center md:text-left">
            Latest tweets
          </h1>

          <div className="flex flex-col md:flex-row gap-x-2 items-center">
            <FiFacebook className="text-white text-4xl md:text-6xl" />

            <p className="max-w-sm text-center text-[#575657] md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-x-2 items-center">
            <FiTwitter className="text-white text-4xl md:text-6xl" />

            <p className="max-w-sm text-center text-[#575657] md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="flex md:ml-16 flex-col space-y-6 mr-2">
          <h1 className="max-w-md text-sm font-thin text-white text-center md:text-left">
            Terms of use
          </h1>
          <p className="max-w-sm text-center text-[#575657] md:text-left">
            © Copyright 2019 Laaqiq All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
