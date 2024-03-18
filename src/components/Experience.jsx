import React from "react";

import react from "../Skills/react.png";
import typescript from "../Skills/typescript.png";
import javascript from "../Skills/javascript.png";
import mongodb from "../Skills/mongodb.png";
import node from "../Skills/nodejs.png";
import tailwind from "../Skills/tailwind.png";
import sass from "../Skills/sass.png";
import css from "../Skills/css.png";
import html from "../Skills/html.png";

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: react,

      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: typescript,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,

      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: mongodb,

      style: "shadow-green-500",
    },
    {
      id: 5,
      src: node,

      style: "shadow-green-600",
    },
    {
      id: 6,
      src: tailwind,

      style: "shadow-sky-600",
    },
    {
      id: 7,
      src: sass,

      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: css,

      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: html,

      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white "
    >
      <div className="max-w-5xl px-4 flex flex-col md:flex-row justify-between items-center py-4 md:py-8 mx-auto ">
        <p className="text-2xl font-bold py-4 ">Tech Stack</p>

        {/* Container för teknikstacks, nu som en rad och med större ikoner */}
        <div className="flex flex-row items-center justify-end space-x-4 md:space-x-6  ">
          {techs.map((tech) => (
            <div key={tech.id} className="flex items-center">
              <img
                src={tech.src}
                alt={tech.title}
                className="w-8 h-8 md:w-10 md:h-10"
              />{" "}
              {/* Större ikoner */}
              <p className="text-xs hidden md:block ml-2">{tech.title}</p>{" "}
              {/* Text visas endast på större skärmar */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
