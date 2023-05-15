import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import weilbild from "../assets/weil-bg.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="mx-auto flex flex-vcol items-center justify-center h-full px-4 md:flex-row container">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font bold text-white">
            I'm a Fullstack Developer{" "}
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-lg">
            I have experience in developing fullstack solutions with a strong
            understanding of databases and fullstack technologys
          </p>
          <div></div>
        </div>
        <div>
          <img
            src={weilbild}
            alt="My profile"
            className="rounded-full mx-auto"
            style={{ borderRadius: "10%", width: "70%", marginLeft: "16rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
