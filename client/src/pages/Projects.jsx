import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const Projects = () => {
  const projects = [
    {
      title: "Weather Dashboard",
      description: "This project is a website that allows you to get the forecast of upcoming 7 days for different cities.",
      technologiesUsed: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      date: "02-01-2024",
      githubLink: "https://github.com/MDKraus/WeatherDashboard",
      liveDemoLink: "https://weather-dashboard-qohg.onrender.com/",
    },
    {
      title: "Note Taker",
      description: "This project allows you to make notes with a title and description and save them for later.",
      technologiesUsed: ["HTML","CSS", "JavaScript", "Node", "Express"],
      date: "02-01-2024",
      githubLink: "https://github.com/MDKraus/Note-Taker",
      liveDemoLink: "",
    },
    {
      title: "Recipe Finder",
      description: "This project allows you to type in different ingredients and get a list of recipes that you can make with those ingredients.",
      technologiesUsed: ["HTML", "CSS", "JavaScript", "Edamam API"],
      date: "02-01-2024",
      githubLink: "https://github.com/MDKraus/RecipeFinder",
      liveDemoLink: "https://recipefinder-thi0.onrender.com/",
    },
  ];
  return (
    <div>
      <h1>Project Page</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>Description: {project.description}</p>
          <p>Technologies Used: {project.technologiesUsed.join(", ")}</p>
          <p>Date: {project.date}</p>
          {project.githubLink && (
            <p>
              GitHub Link:{" "}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.githubLink}
              </a>
            </p>
          )}
          {project.liveDemoLink && (
            <p>
              Live Demo:{" "}
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.liveDemoLink}
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
export default Projects;
