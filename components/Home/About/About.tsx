import React from "react";

const About = () => {
  return (
    <div className="pt-8 pb-8 bg-gradient-to-b from-[#0d0d1f] to-[#131332] px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-300">My Journey</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto"></div>
        </div>
        
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Who I Am</h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                I&apos;m Nandan Mallikarjuna, an <span className="text-cyan-300 font-semibold">AI Engineer and ML Specialist</span> with a proven track record of designing and deploying production-grade AI systems that deliver measurable business impact. I bridge the gap between cutting-edge research and practical applications, transforming complex data challenges into elegant, scalable solutions.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">My Background</h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Currently pursuing my <span className="text-cyan-300 font-semibold">Master&apos;s in Artificial Intelligence</span> at Yeshiva University, I bring together academic excellence with 3+ years of industry experience. My professional journey spans from developing smart agriculture solutions (achieving <span className="text-cyan-300 font-semibold">99% prediction accuracy</span>) to architecting enterprise-grade ML systems for organizations like <span className="text-cyan-300 font-semibold">Bosch, Aspire Technology, and GKVK</span>.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">What I Do</h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                I specialize in architecting end-to-end ML solutions: from designing scalable data pipelines and training sophisticated deep learning models to optimizing workflows and deploying AI systems on cloud platforms. My passion is solving hard problems through data-driven innovation and transforming organizational challenges into competitive advantages.
              </p>
            </div>

            <div className="pt-2 sm:pt-4">
              <h3 className="text-white font-bold mb-4 text-base sm:text-lg flex items-center">
                <span className="inline-block w-2 h-2 bg-cyan-300 rounded-full mr-3"></span>
                Core Competencies
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-white/70 text-sm sm:text-base">
                <li className="flex items-start"><span className="text-cyan-300 mr-2 flex-shrink-0 font-bold">▸</span> <span>Machine Learning & Deep Learning</span></li>
                <li className="flex items-start"><span className="text-cyan-300 mr-2 flex-shrink-0 font-bold">▸</span> <span>Data Engineering & ETL Pipelines</span></li>
                <li className="flex items-start"><span className="text-cyan-300 mr-2 flex-shrink-0 font-bold">▸</span> <span>Computer Vision & NLP</span></li>
                <li className="flex items-start"><span className="text-cyan-300 mr-2 flex-shrink-0 font-bold">▸</span> <span>MLOps & Cloud Deployment (AWS, GCP, Azure)</span></li>
                <li className="flex items-start"><span className="text-cyan-300 mr-2 flex-shrink-0 font-bold">▸</span> <span>Python & Full-Stack Development</span></li>
                <li className="flex items-start"><span className="text-cyan-300 mr-2 flex-shrink-0 font-bold">▸</span> <span>Technical Leadership & Mentoring</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a35] to-[#0f1925] rounded-xl p-6 sm:p-8 border border-cyan-300/30 backdrop-blur backdrop-filter h-fit shadow-xl">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2 flex items-center">
              <span className="inline-block w-1 h-6 bg-cyan-300 rounded mr-3"></span>
              Key Metrics
            </h3>
            <p className="text-white/60 text-xs sm:text-sm mb-6">Quantified impact across projects</p>
            
            <div className="space-y-5">
              <div className="border-l-2 border-cyan-300/50 pl-4 py-2">
                <p className="text-cyan-300 font-bold text-2xl sm:text-3xl">5+</p>
                <p className="text-white/70 text-sm sm:text-base">Production AI/ML Projects</p>
              </div>
              <div className="border-l-2 border-cyan-300/50 pl-4 py-2">
                <p className="text-cyan-300 font-bold text-2xl sm:text-3xl">99%</p>
                <p className="text-white/70 text-sm sm:text-base">Accuracy in Agricultural AI</p>
              </div>
              <div className="border-l-2 border-cyan-300/50 pl-4 py-2">
                <p className="text-cyan-300 font-bold text-2xl sm:text-3xl">40%+</p>
                <p className="text-white/70 text-sm sm:text-base">Performance Optimizations Delivered</p>
              </div>
              <div className="border-l-2 border-cyan-300/50 pl-4 py-2">
                <p className="text-cyan-300 font-bold text-2xl sm:text-3xl">3</p>
                <p className="text-white/70 text-sm sm:text-base">Industry Internships Completed</p>
              </div>
              <div className="border-l-2 border-cyan-300/50 pl-4 py-2">
                <p className="text-cyan-300 font-bold text-2xl sm:text-3xl">16+</p>
                <p className="text-white/70 text-sm sm:text-base">Technical Skills & Tools Mastered</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-cyan-300/20">
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                <span className="text-cyan-300 font-semibold">Open to:</span> AI engineering roles, ML research opportunities, and technical leadership positions where I can drive innovation and impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
