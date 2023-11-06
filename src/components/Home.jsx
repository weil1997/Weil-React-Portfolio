import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import weilbild from "../assets/weil-bg.png";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row container">
        <div className="flex flex-col justify-center h-full mb-8">
          <h2 className="text-4xl sm:text-7xl  text-white py-4">
            I'm a Fullstack Developer{" "}
          </h2>
          <p className="text-gray-500 py-2 max-w-md text-lg">
            I have experience in developing fullstack solutions with a strong
            understanding of databases and fullstack technologies
          </p>
          <div></div>
        </div>
        <div className="ml-8 mt-12 ">
          <img
            src={weilbild}
            alt="My profile"
            className="rounded-full mx-auto"
            style={{ borderRadius: "10%", width: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
