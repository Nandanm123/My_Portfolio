"use client";
import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone, BiX, BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, type: "success", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setModal({ isOpen: true, type: "error", message: "Please fill out all required fields." });
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setModal({ isOpen: true, type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setModal({ isOpen: true, type: "error", message: data.error || "Failed to send message. Please try again." });
      }
    } catch (error) {
      setModal({ isOpen: true, type: "error", message: "A network error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="pt-8 pb-8 relative z-10">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200">
              Schedule a call with me to see if I can help
            </h1>
            <p className="text-gray-400 mt-3 text-base sm:text-base">
              Reach out to me today and let&apos;s discuss how I can help you achieve
              your goals.
            </p>
            {/* info */}
            <div className="mt-5">
              <div className="flex items-center space-x-3 mb-3">
                <BiPhone className="w-6 h-6 text-cyan-300" />
                <p className="text-base font-bold text-gray-400">+1 (646) 656-8936</p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <BiEnvelope className="w-6 h-6 text-cyan-300" />
                <p className="text-base font-bold text-gray-400">
                  nandan555@nmstudios.ai
                </p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <BiMap className="w-6 h-6 text-cyan-300" />
                <p className="text-base font-bold text-gray-400">
                  New Jersey,USA
                </p>
              </div>
            </div>
            {/* social icons */}
            <div className="flex items-center mt-4 space-x-2">
              <a href="https://github.com/SajalTalukder" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-gray-700 transition-all duration-300">
                <FaGithub className="text-white w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/nandan-mallikarjuna" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-600 transition-all duration-300">
                <FaLinkedin className="text-white w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300">
                <FaTwitter className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
          {/* form */}
          <form
            onSubmit={handleSubmit}
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
            className="md:p-8 p-4 bg-[#131332] rounded-lg"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="px-4 py-2.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-300 focus:bg-[#3a3a5a] transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="px-4 py-2.5 mt-3 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-300 focus:bg-[#3a3a5a] transition-all duration-300"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="px-4 py-2.5 mt-3 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-300 focus:bg-[#3a3a5a] transition-all duration-300"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="px-4 py-2.5 mt-3 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-300 focus:bg-[#3a3a5a] transition-all duration-300 h-[8rem] resize-none"
            ></textarea>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-4 px-10 py-3 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 text-black font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-300/50 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Dynamic Professional Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div 
            className="bg-[#131332] border border-cyan-300/30 rounded-2xl p-6 sm:p-8 max-w-sm w-full shadow-2xl transform transition-all"
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            <button 
              onClick={() => setModal({ ...modal, isOpen: false })}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors focus:outline-none"
            >
              <BiX className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center text-center">
              {modal.type === "success" ? (
                <div className="w-16 h-16 bg-cyan-300/10 rounded-full flex items-center justify-center mb-5 border border-cyan-300/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <BiCheckCircle className="w-10 h-10 text-cyan-300" />
                </div>
              ) : (
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-5 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                  <BiErrorCircle className="w-10 h-10 text-red-500" />
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {modal.type === "success" ? "Message Sent!" : "Delivery Failed"}
              </h3>
              
              <p className="text-white/70 mb-8 text-sm sm:text-base">
                {modal.message}
              </p>
              
              <button 
                onClick={() => setModal({ ...modal, isOpen: false })}
                className={`w-full py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg ${
                  modal.type === "success" 
                    ? "bg-cyan-300 text-black hover:bg-cyan-200 hover:shadow-cyan-300/40" 
                    : "bg-red-500 text-white hover:bg-red-400 hover:shadow-red-500/40"
                }`}
              >
                {modal.type === "success" ? "Continue" : "Try Again"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
