import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <div className="pt-8 pb-8">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Building intelligent solutions <br /> with AI, data, and full-stack <br /> innovation
            </h1>
            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 items-center">

                {/* AI/ML Model Development */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <ServiceCard
                        icon="/images/s1.png"
                        name="AI/ML Model Development"
                        description="Building and training machine learning and deep learning models to solve real-world problems."
                    />
                </div>

                {/* Data Engineering & Pipelines */}
                <div
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="100"
                >
                    <ServiceCard
                        icon="/images/s2.png"
                        name="Data Engineering & Pipelines"
                        description="Designing scalable ETL pipelines and preparing high-quality datasets for AI applications."
                    />
                </div>

                {/* Computer Vision & NLP */}
                <div
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="200"
                >
                    <ServiceCard
                        icon="/images/s3.png"
                        name="Computer Vision & NLP"
                        description="Implementing vision (YOLO, CNNs) and NLP models to understand images, video, and language."
                    />
                </div>

                {/* AI Deployment & MLOps */}
                <div
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="300"
                >
                    <ServiceCard
                        icon="/images/s4.png"
                        name="AI Deployment & MLOps"
                        description="Deploying AI models with APIs, Docker, and cloud platforms for production-grade performance."
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;