import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact, FaBrain } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
    return (
    <div className="pt-8 pb-8">
            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* WORK EXPERIENCE SECTION */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                        My Work <span className="text-cyan-200">Experience</span>
                    </h1>
                    <div
                        className="mt-6 space-y-4"
                        data-aos="zoom-in"
                        data-aos-anchor-placement="top-center"
                    >
                        <ResumeCard
                            Icon={BsDatabase}
                            role="Data Engineering Intern"
                            company="Bosch, Bengaluru, India"
                            date="Feb 2025 - May 2025"
                            description="Built and maintained scalable ETL pipelines to process large-scale manufacturing sensor data for predictive maintenance. Streamlined data ingestion using Python and Apache Spark, reducing latency by 40% while ensuring data integrity and governance."
                        />
                        <ResumeCard
                            Icon={FaCodepen}
                            role="AI Business Intelligence Analyst Intern"
                            company="Aspire Technology, India"
                            date="Oct 2024 - Dec 2024"
                            description="Developed interactive dashboards and BI reports using Tableau and Power BI to visualize KPIs. Presented actionable data-driven insights to stakeholders to support business decisions."
                        />
                        <ResumeCard
                            Icon={FaBrain}
                            role="Research Intern – Smart Agriculture (IoT & AI-based Crop Recommendation)"
                            company="GKVK (University of Agricultural Sciences), India"
                            date="Oct 2023 - Nov 2023"
                            description="Designed and trained a Random Forest model achieving 99% accuracy in crop suitability predictions using soil nutrient and weather data. Presented findings promoting AI-driven smart farming practices."
                        />
                    </div>
                </div>

                {/* EDUCATION SECTION */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                        My <span className="text-cyan-200">Education</span>
                    </h1>
                    <div
                        className="mt-6 space-y-4"
                        data-aos="zoom-out"
                        data-aos-anchor-placement="top-center"
                        data-aos-delay="300"
                    >
                        <ResumeCard
                            Icon={FaReact}
                            role="Master's Degree in Artificial Intelligence"
                            company="Yeshiva University, Katz School of Science and Health, New York City, NYC"
                            date="Expected Aug 2027"
                            description="Courses: Machine Learning, Artificial Intelligence, Deep Learning, Neural Networks, Predictive Models, Data Acquisition and Management, and AI Capstone R&D."
                        />
                        <ResumeCard
                            Icon={BsDatabase}
                            role="Bachelor of Technology in Computer Science and Engineering"
                            company="Vemana Institute of Technology, India"
                            date="Jun 2025"
                            description="Focused on software engineering, data structures, and AI systems. Developed a deep interest in data-driven and cloud-based AI solutions."
                        />
                    </div>
                </div>
            </div>

            {/* CERTIFICATIONS SECTION */}
            <div className="w-[90%] sm:w-[70%] mx-auto mt-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    My <span className="text-cyan-200">Certifications</span>
                </h1>
                <div
                    className="mt-6 space-y-4"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="500"
                >
                    <ResumeCard
                        Icon={BiBadge}
                        role="Artificial Intelligence Foundation"
                        company="Infosys SpringBoard"
                        date="2024"
                        description="Completed foundational AI concepts including supervised learning, neural networks, and applied AI solutions."
                    />
                    <ResumeCard
                        Icon={BiBadge}
                        role="Machine Learning Foundation"
                        company="NASSCOM"
                        date="2024"
                        description="Covered data preprocessing, model evaluation, and ML pipeline deployment."
                    />
                    <ResumeCard
                        Icon={BiBadge}
                        role="System Administrator (Course Completed)"
                        company="ServiceNow University"
                        date="Exam Scheduled"
                        description="Learned ServiceNow architecture, system configuration, and user management."
                    />
                    <ResumeCard
                        Icon={BiBadge}
                        role="Application Developer (In Progress)"
                        company="ServiceNow University"
                        date="Ongoing"
                        description="Developing low-code and pro-code applications within the ServiceNow platform."
                    />
                </div>
            </div>
        </div>
    );
};

export default Resume;