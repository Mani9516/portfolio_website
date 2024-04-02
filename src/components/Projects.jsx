import React, { useEffect } from "react";
import DiceGame from "../assets/projects/DiceGame.png";
import Quiz from "../assets/projects/download.jpeg";
import News from "../assets/projects/Newsweb.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const Projects = () => [
    {
      id: 1,
      src: DiceGame,
      desc: "DiceGame is a Game Website made using ReactJS + CSS , offering endless fun in every roll. Immerse yourself in this thrilling adventure of chance and skill...",
      code: "https://github.com/Shwetameena35/Dice-Game",
    },
    {
      id: 2,
      src: News,
      desc: "Dive into a dynamic news experience crafted with React + CSS + News API. Explore a seamlessly designed platform offering real-time news at your fingertips...",
      code: "https://github.com/Shwetameena35/News",
    },
    {
      id: 3,
      src: Quiz,
      desc: "Interactive quiz website, made using HTML+CSS+JS. Engage, learn, and evaluate my understanding in this platform to tailored for foster learning...",
      code: "https://github.com/Shwetameena35/Quiz",
    },
  ];

  return (
    <div
      name="projects"
      className="h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Projects
          </h2>
          <p className="py-6">Explore a selection of my projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0">
          {Projects().map(({ id, src, desc, demo, code }) => (
            <div
              data-aos="fade-in"
              data-aos-duration="500"
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt="Ai"
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="p-2 text-justify font-extralight">{desc}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
