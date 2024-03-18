import React from "react";
import spotify from "../assets/spotify-bild.jpg";
import kanban from "../assets/kanban-bild.jpg";
import klarna from "../assets/klarna-bild.jpg";
import restaurantpage from "../assets/restaurant-bild.jpg";
import Project from "./Project";

const projects = [
  {
    id: 1,
    src: kanban,
    title: "📋 Kanban Board Project",
    description:
      "A dynamic Kanban board application designed to streamline project management and workflow visualization. This interactive tool allows users to create, move, and manage tasks with ease, promoting better organization and productivity in team settings or for personal use. Built with modern web technologies, it embodies efficient task-tracking in a sleek, user-friendly interface.",
    link: "https://incredible-gnome-bdceb0.netlify.app",
    tech: ["React", "CSS"],
  },
  {
    id: 2,
    src: spotify,

    title: "🎵 Spotify Clone",
    description:
      "A personalized Spotify clone that brings music to life. Users can listen to their own music and playlists, powered by the Spotify API. The application replicates the core features of Spotify, offering an immersive audio experience with a custom-built, intuitive user interface and seamless streaming capabilities.",
    link: "https://spotify-batch5.vercel.app/",
    tech: ["React", "CSS"],
  },
  {
    id: 3,
    src: klarna,
    title: "💳 Klarna API Project",
    description:
      "This project showcases an integration with Klarna's API, providing a seamless checkout experience. Users can simulate secure payment transactions with the convenience and reliability of Klarna's services. The implementation demonstrates a solid understanding of payment gateway integrations within a simulated e-commerce environment.",
    link: "https://klarna.herokuapp.com/",
    tech: ["JavaScript", "CSS"],
  },

  {
    id: 7,
    src: restaurantpage,
    title: "🍴 Restaurant Landing Page",
    description:
      "A tastefully designed landing page for a modern restaurant, aiming to attract food enthusiasts and reservation bookings. The page showcases the restaurant's ambiance, menu, and specialties while providing a user-friendly platform for customers to interact with the business. It features high-quality visuals, responsive design, and an easy navigation structure for an optimal user experience.",

    link: "https://helpful-licorice-c6a0c5.netlify.app",
    tech: ["React", "SCSS"],
  },
];

const Portfolio = () => {
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full text-white pt-20 "
    >
      <div className="max-w-5xl px-4 mx-auto py-8">
        <p className="text-4xl font-bold my-10 text-center md:text-start">
          Portfolio
        </p>
        <p className="text-xl text-center md:text-start">
          Each Project is a unique piece of development
        </p>

        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
