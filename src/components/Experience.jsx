import React from "react";

import react from "../Skills/react.png";
import typescript from "../Skills/typescript.png";
import javascript from "../Skills/javascript.png";
import mongodb from "../Skills/mongodb.png";
import node from "../Skills/node.js.png";
import tailwind from "../Skills/tailwind.png";
import sass from "../Skills/sass.png";
import css from "../Skills/css.png";
import html from "../Skills/html.png";

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: typescript,
      title: "TYPESCRIPT",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: mongodb,
      title: "MONGODB",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: node,
      title: "NODE.JS",
      style: "shadow-green-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-600",
    },
    {
      id: 7,
      src: sass,
      title: "SASS",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="container mx-auto px-4 py-10   text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">Experience</h2>
          <p className="text-lg font-bold">
            These are the technologies I have worked with:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}
            >
              <img src={tech.src} alt={tech.title} className="w-16 mx-auto" />
              <p className="mt-4">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
