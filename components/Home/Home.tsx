"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);
  return (
    <div className="overflow-hidden ">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
