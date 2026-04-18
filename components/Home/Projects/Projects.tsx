import Image from "next/image";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      image: "/images/p1.jpg",
      title: "Live Ball Tracking System",
      tags: "Computer Vision, Sensor Fusion",
      metrics: "Real-Time Detection | Sports Analytics",
      github: "https://github.com/SajalTalukder",
      demo: "#"
    },
    {
      image: "/images/p2.jpg",
      title: "Deep Fake Video Recognition",
      tags: "Deep Learning, Computer Vision",
      metrics: "High Accuracy Detection | Production Ready",
      github: "https://github.com/SajalTalukder",
      demo: "#"
    },
    {
      image: "/images/p3.jpg",
      title: "Netflix-Clone Streaming Platform",
      tags: "Full-stack, Docker",
      metrics: "1000+ Users | Optimized Performance",
      github: "https://github.com/SajalTalukder",
      demo: "#"
    },
    {
      image: "/images/p4.jpg",
      title: "Real-Time Crop Recommendation System",
      tags: "IoT, Data Analytics",
      metrics: "99% Accuracy | 1000+ Farmers",
      github: "https://github.com/SajalTalukder",
      demo: "#"
    }
  ];

  return (
    <div className="pt-8 pb-8">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300"> projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100}
            className="group project-card"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={650}
                className="rounded-lg group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-cyan-300 transition-all duration-200 flex items-center gap-2 transform scale-90 group-hover:scale-100 hover:scale-110"
                >
                  <FaGithub className="w-5 h-5" />
                  Code
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-300 text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-all duration-200 flex items-center gap-2 transform scale-90 group-hover:scale-100 hover:scale-110"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    Demo
                  </a>
                )}
              </div>
            </div>
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
              {project.title}
            </h1>
            <h1 className="pt-2 font-medium text-cyan-300">{project.metrics}</h1>
            <h1 className="pt-2 font-medium text-white/80">{project.tags}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
