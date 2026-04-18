"use client";
import React from "react";
import dynamic from "next/dynamic";

// Prevent "window is not defined" on SSR
const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });

import {
    SiPython,
    SiR,
    SiMongodb,
    SiMysql,
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
    SiDocker,
    SiKubernetes,
    SiJenkins,
    SiTableau,
    SiAmazon,
} from "react-icons/si";
import { FaBrain, FaLanguage } from "react-icons/fa";

//
// ✅ Local SVG Components
//


const AzureIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-10 h-10 fill-white"
    >
        <path d="M32 2L2 62h17l5-10h16l4 10h18L32 2zm0 17.4L41.8 44H22.6L32 19.4z" />
    </svg>
);

const PowerBiIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-10 h-10 fill-[#F2C811]"
    >
        <path d="M481 62H31C14 62 0 76 0 93v326c0 17 14 31 31 31h450c17 0 31-14 31-31V93c0-17-14-31-31-31zM109 375c0 9-8 17-17 17s-17-8-17-17V201c0-9 8-17 17-17s17 8 17 17v174zm83 0c0 9-8 17-17 17s-17-8-17-17V167c0-9 8-17 17-17s17 8 17 17v208zm83 0c0 9-8 17-17 17s-17-8-17-17V233c0-9 8-17 17-17s17 8 17 17v142zm83 0c0 9-8 17-17 17s-17-8-17-17V267c0-9 8-17 17-17s17 8 17 17v108z" />
    </svg>
);

//
// ✅ Skills Data
//
const skills = [
    { name: "Python", icon: <SiPython />, percentage: 95 },
    { name: "R", icon: <SiR />, percentage: 85 },
    { name: "MySQL", icon: <SiMysql />, percentage: 88 },
    { name: "MongoDB", icon: <SiMongodb />, percentage: 87 },
    { name: "TensorFlow", icon: <SiTensorflow />, percentage: 90 },
    { name: "PyTorch", icon: <SiPytorch />, percentage: 88 },
    { name: "Scikit-learn", icon: <SiScikitlearn />, percentage: 85 },
    { name: "Deep Learning", icon: <FaBrain />, percentage: 92 },
    { name: "NLP", icon: <FaLanguage />, percentage: 84 },
    { name: "AWS", icon: <SiAmazon />, percentage: 89 },
    { name: "Microsoft Azure", icon: <AzureIcon />, percentage: 83 },
    { name: "Docker", icon: <SiDocker />, percentage: 88 },
    { name: "Kubernetes", icon: <SiKubernetes />, percentage: 82 },
    { name: "Jenkins", icon: <SiJenkins />, percentage: 80 },
    { name: "Power BI", icon: <PowerBiIcon />, percentage: 86 },
    { name: "Tableau", icon: <SiTableau />, percentage: 87 },
];

//
// ✅ Component
//
const Skills: React.FC = () => {
    return (
        <div className="text-white pt-8 pb-8">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                My <span className="text-cyan-300">Skills</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
                {skills.map((skill, i) => (
                    <Tilt key={skill.name} scale={1.2} transitionSpeed={400}>
                        <div
                            data-aos="flip-right"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay={i * 100}
                            className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
                        >
                            <div className="text-5xl mb-4 text-gray-300 flex items-center justify-center">
                                {skill.icon}
                            </div>
                            <p className="text-2xl font-semibold">{skill.percentage}%</p>
                            <p className="text-cyan-400 mt-1 font-medium text-center">
                                {skill.name}
                            </p>
                        </div>
                    </Tilt>
                ))}
            </div>
        </div>
    );
};

export default Skills;