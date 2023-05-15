import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "experience",
      idName: "experience-section",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="bg-black text-white w-full">
      <div className="container mx-auto flex justify-between items-center h-20">
        <h1 className="text-5xl font-medium ml-1">Weil Essaisi</h1>
        <ul className="hidden md:flex flex-row ">
          {links.map(({ id, link, idName }) => (
            <li
              key={id}
              className="px-2 cursor-pointer capitalize font-medium text-gray-500 hover:scale-100 duration-200 hover:text-white"
            >
              <Link
                activeClass="text-white"
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                offset={idName === "experience-section" ? -100 : -70}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                activeClass="text-white"
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ul className="flex flex-col md:hidden">
        {links.map(({ id, link, idName }) => (
          <li
            key={id}
            className="px-2 cursor-pointer capitalize font-medium text-gray-500 hover:scale-100 duration-200 hover:text-white"
          >
            <Link
              activeClass="text-white"
              to={link}
              spy={true}
              smooth={true}
              duration={500}
              offset={idName === "experience-section" ? -100 : -70}
              onClick={() => setNav(false)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
