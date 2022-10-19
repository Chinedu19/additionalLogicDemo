import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BgImage from "../assets/images/bg-Image.png";
import { BiCommand } from "react-icons/bi";
import Stock from "../assets/images/stock.png";
import Graph from "../assets/images/graph.png";
import { imgArr } from "../App";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Header />
      <div
        className="w-full h-[60vh] md:h-[80vh]"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="container flex pt-44 items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
          <div className="flex text-darkGray flex-col mb-32 md:ml-48 md:items-start items-center space-y-6 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Smart products
            </h1>
            <p className="max-w-sm text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore
              assumenda corrupti perferendis.
            </p>
            <div className="flex gap-x-5 md:justify-start">
              <button className="px-8 text-sm font-semibold py-1 border border-darkGray text-darkGray bg-white rounded-sm hover:bg-darkGray hover:text-white">
                Sign up
              </button>
              <Link
                to={"/terms"}
                className="text-white bg-lightBlue text-sm font-semibold py-1 px-12 rounded-sm hover:bg-black"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div className="container flex  flex-col-reverse md:flex-row items-center md:py-28 px-6 mx-auto mt-10 space-y-10 md:space-y-0 md:px-4 md:space-x-44">
          <div className="flex flex-col items-center md:items-end gap-y-12 md:w-1/2">
            <img
              src={Stock}
              className="md:w-72 md:h-72 w-52 h-52 rounded-full"
              alt=""
            />
          </div>

          <div className="flex flex-col text-darkGray space-y-6 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-4xl md:text-left">
              Digital Analysis
            </h1>
            <p className="max-w-sm text-center font-thin text-black md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores culpa libero temporibus dolor adipisci perferendis
            </p>

            <div className="flex items-center justify-center md:justify-start gap-x-5 md:flex-row font-semibold pb-10 md:gap-x-14">
              <div className="space-y-2">
                <div className="flex gap-x-2 flex-row pt-3 items-center">
                  <BiCommand />
                  <p className="text-sm">SEO Optimization</p>
                </div>

                <div className="flex flex-row gap-x-2 pt-3 items-center">
                  <BiCommand />
                  <p className="text-sm">Awards</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex md:flex-row pt-3 items-center">
                  <svg
                    className="w-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    // className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>

                  <p className="text-sm">Customer experience</p>
                </div>

                <div className="flex md:flex-row pt-3 items-center">
                  <svg
                    className="w-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    // className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                  <p className="text-sm">Content Marketting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-28 text-darkGray">
        <div className="container flex md:pb-18  flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-14 md:space-y-0 md:px-4 md:space-x-44">
          <div className="flex flex-col items-center md:items-end space-y-12 md:w-1/2">
            <img src={Graph} className="md:w-80 md:h-64 h-40 w-58" alt="" />
          </div>

          <div className="flex flex-col mb-32 space-y-6 pb-10 md:w-1/2">
            <h1 className="max-w-md text-darkGray text-4xl font-bold text-center md:text-4xl md:text-left">
              Get your free <br />
              quote today
            </h1>
            <p className="max-w-sm  text-center font-thin text-black md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              tenetur corporis alias, quae a.
            </p>
          </div>
        </div>
      </section>
      <section id="features" className="bg-black py-14">
        <div className="flex flex-col my-20 space-y-12 md:space-y-0 md:flex-row items-center">
          <div className="flex md:ml-28 flex-col space-y-6 md:mr-10">
            <h1 className="max-w-md text-sm font-thin text-white text-center md:text-left">
              OUR TEAM
            </h1>
            <p className="max-w-sm text-center font-semibold text-white md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus tempore inventore accusamus aliquid architecto
            </p>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex pl-5 md:pl-0 container flex-row space-x-4 snap-x overflow-x-auto scroll-hide">
              {imgArr.map((item) => (
                <img
                  className="snap-center rounded-lg h-48 w-auto"
                  src={item}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="bg-gradient-to-r from-[#ffb357] via-[#FECD92] to-[#ffb357] py-1 items-center flex"
      >
        <div className="px-4 mx-auto items-center pb-10">
          <div className="flex flex-col mb-2 items-center space-y-6 mt-10">
            <p className="max-w-md text-sm font-extralight text-black text-center">
              CONTACT
            </p>
            <h1 className="md:text-5xl text-2xl font-bold text-center">
              Get in touch
            </h1>

            <div className=" space-y-2">
              <div className="md:space-x-28 space-y-2 md:flex ">
                <input
                  type="text"
                  className="flex pl-3 m-auto pr-12 py-1 shadow-md rounded-sm focus:outline-none"
                  placeholder="Your name"
                />
                <input
                  type="text"
                  className="flex pl-3 m-auto shadow-md pr-12 py-1 rounded-sm focus:outline-none"
                  placeholder="Your company"
                />
              </div>

              <div className="md:space-x-28  space-y-2 md:flex">
                <input
                  type="text"
                  className=" flex pl-3 m-auto shadow-md pr-12 py-1 rounded-sm focus:outline-none"
                  placeholder="Your email"
                />
                <input
                  type="text"
                  className=" flex  pl-3 m-auto shadow-md pr-12 py-1 rounded-sm focus:outline-none"
                  placeholder="Your phone"
                />
              </div>
            </div>

            <button className="text-white rounded-sm bg-lightBlue text-sm font-semibold py-1 px-12 hover:bg-black">
              Next
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
