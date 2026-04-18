"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  const handleSeeMyWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/profile.jpg"
          alt="Nandan Mallikarjuna"
          width={120}
          height={120}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 text-center font-bold tracking-wide"
        >
            Empowering innovation , <br />
          through,
          <span className="text-cyan-200"> Artificial Intelligence.</span>
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-2 text-sm px-2 text-center sm:text-xl font-medium flex items-center"
        >
          Hi! I&apos;m Nandan Mallikarjuna - A Growth-Focused Learner
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  " AI Engineer",
                  " AI Research Engineer / Applied AI Researcher ",
                  " AI Full Stack Developer",
                  " MLOps Engineer ",
                  " AI Product Engineer ",
                  " Generative AI / LLM Engineer ",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <div className="flex gap-3 mt-4 flex-wrap justify-center items-center">
          <button
            onClick={handleSeeMyWork}
            data-aos="fade-up"
            data-aos-delay="600"
            className="px-8 py-3 bg-blue-800 hover:bg-blue-900 hover:shadow-lg transition-all duration-300 cursor-pointer rounded-full text-sm sm:text-base font-medium hover:scale-105 active:scale-95"
          >
            <span>See my work</span>
            <BsArrowRight className="w-4 h-4 ml-2 inline-block" />
          </button>
          <a
            href="https://github.com/SajalTalukder"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="650"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer rounded-full text-sm sm:text-base font-medium flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
