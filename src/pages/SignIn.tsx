import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import PenBg from "../assets/images/penBg.png";
const SignIn = () => {
  return (
    <>
      <Header />
      <section
        style={{
          backgroundImage: `url('${PenBg}')`,
        }}
        className="w-full bg-no-repeat bg-cover h-[80vh] flex flex-col md:flex-row items-center justify-center"
      >
        <div className="bg-white flex flex-col gap-y-3 p-12 rounded-sm w-full md:w-[360px] shadow-lg text-darkGray">
          <h2 className="font-bold text-xl mb-3">Sign in here </h2>

          <div className="">
            <p className="text-sm font-semibold mb-1">First Name</p>
            <input
              type={"text"}
              className="w-full border border-gray-100 p-1 px-2 rounded outline-none"
              placeholder="placeholder"
            />
          </div>
          <div className="my-3">
            <p className="text-sm font-semibold mb-1">Last Name</p>
            <input
              type={"text"}
              className="w-full border border-gray-100 p-1 px-2 rounded outline-none"
              placeholder="placeholder"
            />
          </div>
          <button className="text-white rounded bg-gray-200 w-full py-2">
            Next
          </button>
          <p className="text-sm font-bold">Forgotten Password?</p>

          <div className="mt-8 block md:hidden">
            <h2 className="font-bold text-xl text-darkGray">
              Are you a new member?
            </h2>
            <button className="mt-8 w-full px-8 text-sm font-semibold py-1 border border-darkGray text-darkGray bg-white rounded-sm hover:bg-darkGray hover:text-white">
              Sign up
            </button>
          </div>
        </div>
        <div className="hidden md:block pl-10">
          <h2 className="font-bold text-xl text-darkGray">
            Are you a new member?
          </h2>
          <button className="mt-8 w-full px-8 text-sm font-semibold py-1 border border-darkGray text-darkGray bg-white rounded-sm hover:bg-darkGray hover:text-white">
            Sign up
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignIn;
