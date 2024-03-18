import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/weil-essaisi-430707195/",
      style: { padding: 8 },
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/weil1997",
    },
  ];

  return (
    <div className="flex flex-row items-center mt-4 gap-4">
      {links.map(({ id, child, style, href }) => (
        <a
          key={id}
          href={href}
          className="bg-gray-500 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700 transition duration-300 mb-4"
          style={style}
          target="_blank"
          rel="noreferrer"
        >
          {child}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
