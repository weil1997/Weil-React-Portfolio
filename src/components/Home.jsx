import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import weilbild from "../assets/weilbild.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-vcol items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font bold text-white">
            I'm a Fullstack Developer{" "}
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-lg">
            I have experience in developing fullstack solutions with a strong
            understanding of databases and fullstack technologys
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items -center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor pointer">
              Portfolio
              <span className="hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={weilbild}
            alt="My profile"
            className="rounded-full mx-auto w-1/2 md:w-1/1 float-right"
            style={{ borderRadius: "10%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
