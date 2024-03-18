import React from "react";
import weilbild from "../assets/weil-bg.png";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen text-white bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-5xl px-4 flex flex-col md:flex-row items-center justify-center h-full mx-auto ">
        <div className="flex flex-col items-center md:items-start max-w-5xl mx-auto    ">
          <h2 className="text-4xl sm:text-7xl text-white text-center md:text-start">
            I'm a Fullstack <br className="hidden md:inline" /> Developer
          </h2>
          <p className="text-gray-500 py-4 text-lg text-center md:text-start">
            I have experience in developing fullstack solutions with a strong
            understanding of databases and fullstack technologies.
          </p>
          {/* Placera SocialLinks under texten */}
          <SocialLinks />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-8 md:mt-0 flex justify-center">
          <img
            src={weilbild}
            alt="My profile"
            className="rounded-full"
            style={{ maxWidth: "300px", borderRadius: "10%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
