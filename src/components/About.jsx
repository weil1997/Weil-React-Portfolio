import React from "react";
import image from "../../pictures/image.png"; // Adjust the import path as necessary

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white h-full pt-20"
    >
      <div className="max-w-5xl px-4 mx-auto py-16 flex flex-col md:flex-row items-start">
        {/* Bild-container */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={image}
            alt="About Me"
            className="rounded-lg shadow-xl w-full max-w-sm md:max-w-md my-16" // Anpassa dessa klasser för att ställa in önskad bredd
          />
        </div>
        {/* Text-container */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 ">
          {/* Öka vänstermarginalen (pl) för att matcha med positionen av "Foodie" bilden */}
          <h2 className="text-4xl font-bold mb-4 from-cyan-500 my-16 text-center md:text-start ">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-center md:text-start ">
            A dedicated full stack developer based in Sweden 📍
          </p>
          {/* Använd Tailwinds griddsystem för att justera textens bredd */}
          <p className="text-base md:text-lg mt-4 md:pr-12 text-center md:text-start ">
            I am a React developer with a skill set in the MERN Stack. I possess
            a solid understanding of React, as well as Node.js, MongoDB, and
            Express which allows me to build powerful, full-stack applications
            that deliver outstanding performance and user experiences...
          </p>
          {/* Ytterligare text om nödvändigt */}
        </div>
      </div>
    </div>
  );
};

export default About;
