import React, { useEffect } from "react";
import Legalease from "../assets/Project/LegalEase.png";
import Lenscan from "../assets/Project/Lenscan.png";
import Uber from "../assets/Project/Routes.png";
import Zomato from "../assets/Project/Zomato.png";
import Crawler from "../assets/Project/Crawler.png";
import routes from "../assets/Project/Routes.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const Projects = () => [
    {
      id: 1,
      src: Legalease,
      desc: "Legal documentation can be a complicated and time-consuming process, especially for individuals and small businesses who may not have access to legal resources. In addition, the language and jargon used in legal documents can be difficult for non-lawyers to understand, which can lead to errors and misunderstandings....",
      code: "https://legal-document-generator.onrender.com/",
    },
    {
      id: 2,
      src: Lenscanai,
      desc: "This tool analyzes images to determine if they have been manipulated or generated using deepfake techniques. It looks for inconsistencies, artifacts, and other signs of forgery.Image forensicsArtifact detectionForgery analysis...",
      code: "https://github.com/Shwetameena35/News",
    },
    {
      id: 3,
      src: Uber ,
      desc: "The aim of analysis is to identify the root cause of the problem (i.e. cancellation and non-availability of cars) and recommend ways to improve the situation. As a result of your analysis, you should be able to present to the client the root cause(s) and possible hypotheses of the problem(s) and recommend ways to improve them....",
      code: "https://uber-case-study.onrender.com/",
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
