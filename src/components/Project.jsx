import React from "react";

function Project({ project, index }) {
  return (
    <>
      {/* Mobile */}
      <div
        className={`flex md:hidden items-center flex-col justify-center gap-x-12 my-16`}
      >
        {/* Project Title */}
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        {/* Project Image */}
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={project.src}
            alt="Project"
            className="shadow-lg transform transition hover:scale-105 duration-500 rounded-lg"
          />
        </a>
        {/* Tech Tags */}
        <div className="flex items-center mt-3">
          {project.tech.map((tech, index) => (
            <span key={index} className="text-white mr-2">
              {tech}
            </span>
          ))}
        </div>
        {/* Project Description */}
        <div>
          <p className="text-white mt-3 text-justify">{project.description}</p>
        </div>
      </div>
      {/* Web */}
      <div
        className={`hidden md:flex ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } 
                items-center justify-center gap-x-12 my-16`}
      >
        {/* Project Image */}
        <div className="w-1/2">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
              src={project.src}
              alt="Project"
              className="shadow-lg transform transition hover:scale-105 duration-500 rounded-lg"
            />
          </a>
        </div>
        {/* Project Description */}
        <div className="w-1/2">
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-white mb-3">{project.description}</p>
          {/* Tech Tags */}
          <div className="flex items-center mb-6">
            {project.tech.map((tech, index) => (
              <span key={index} className="text-white mr-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
