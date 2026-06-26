"use client";
import React, { useState, useEffect, useRef } from "react";
import { BiEnvelope, BiMap, BiPhone, BiX, BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const countries = [
  { code: "+91", iso: "in", name: "India", placeholder: "98765 43210", format: "XXXXX XXXXX" },
  { code: "+1", iso: "us", name: "United States", placeholder: "(123) 456-7890", format: "(XXX) XXX-XXXX" },
  { code: "+44", iso: "gb", name: "United Kingdom", placeholder: "7123 456789", format: "XXXX XXXXXX" },
  { code: "+61", iso: "au", name: "Australia", placeholder: "412 345 678", format: "XXX XXX XXX" },
  { code: "+1", iso: "ca", name: "Canada", placeholder: "(123) 456-7890", format: "(XXX) XXX-XXXX" },
  { code: "+971", iso: "ae", name: "UAE", placeholder: "50 123 4567", format: "XX XXX XXXX" },
  { code: "+65", iso: "sg", name: "Singapore", placeholder: "8123 4567", format: "XXXX XXXX" },
  { code: "+49", iso: "de", name: "Germany", placeholder: "123 4567890", format: "XXX XXXXXXX" },
  { code: "+33", iso: "fr", name: "France", placeholder: "6 12 34 56 78", format: "X XX XX XX XX" },
  { code: "+39", iso: "it", name: "Italy", placeholder: "312 345 6789", format: "XXX XXX XXXX" },
  { code: "+34", iso: "es", name: "Spain", placeholder: "612 345 678", format: "XXX XXX XXX" },
  { code: "+81", iso: "jp", name: "Japan", placeholder: "90 1234 5678", format: "XX XXXX XXXX" },
  { code: "+86", iso: "cn", name: "China", placeholder: "138 1234 5678", format: "XXX XXXX XXXX" },
  { code: "+62", iso: "id", name: "Indonesia", placeholder: "812 3456 7890", format: "XXX XXXX XXXX" },
  { code: "+31", iso: "nl", name: "Netherlands", placeholder: "6 12345678", format: "X XXXXXXXX" },
  { code: "+41", iso: "ch", name: "Switzerland", placeholder: "79 123 45 67", format: "XX XXX XX XX" },
  { code: "+46", iso: "se", name: "Sweden", placeholder: "70 123 45 67", format: "XX XXX XX XX" },
  { code: "+353", iso: "ie", name: "Ireland", placeholder: "83 123 4567", format: "XX XXX XXXX" },
  { code: "+966", iso: "sa", name: "Saudi Arabia", placeholder: "50 123 4567", format: "XX XXX XXXX" },
  { code: "+27", iso: "za", name: "South Africa", placeholder: "82 123 4567", format: "XX XXX XXXX" },
];

const formatPhone = (value: string, formatPattern: string): string => {
  const digits = value.replace(/\D/g, "");
  let formatted = "";
  let digitIndex = 0;

  for (let i = 0; i < formatPattern.length; i++) {
    if (digitIndex >= digits.length) break;
    const char = formatPattern[i];
    if (char === "X") {
      formatted += digits[digitIndex];
      digitIndex++;
    } else {
      formatted += char;
    }
  }
  return formatted;
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", countryCode: "+91", countryIso: "in", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, type: "success", message: "" });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === "phone") {
      const selectedCountry = countries.find(c => c.iso === formData.countryIso) || countries[0];
      const formatted = formatPhone(e.target.value, selectedCountry.format);
      setFormData({ ...formData, phone: formatted });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setModal({ isOpen: true, type: "error", message: "Please fill out all required fields." });
      return;
    }

    const selectedCountry = countries.find(c => c.iso === formData.countryIso) || countries[0];
    const expectedDigits = selectedCountry.format.replace(/[^X]/g, "").length;
    const actualDigits = formData.phone.replace(/\D/g, "").length;

    if (actualDigits < expectedDigits) {
      setModal({
        isOpen: true,
        type: "error",
        message: `Please enter a complete phone number for ${selectedCountry.name} (${expectedDigits} digits).`,
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      const fullPhone = `${formData.countryCode} ${formData.phone.trim()}`;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          message: formData.message,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setModal({ isOpen: true, type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", countryCode: "+91", countryIso: "in", phone: "", message: "" });
      } else {
        setModal({ isOpen: true, type: "error", message: data.error || "Failed to send message. Please try again." });
      }
    } catch {
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
                  New York, USA
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
          <form
            onSubmit={handleSubmit}
            className="md:p-8 p-4 bg-[#131332] rounded-lg"
          >
            <div className="mb-6 pb-4 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-white">
                <BiEnvelope className="text-cyan-300 w-6 h-6 animate-pulse" />
                <span>Send a Message</span>
              </h2>
              <p className="text-xs text-white/50 mt-1">
                Fill out the form below and I&apos;ll get back to you shortly.
              </p>
            </div>
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
            <div className="flex gap-2 mt-3 w-full relative" ref={dropdownRef}>
              {/* Custom Country Code Dropdown */}
              <div className="w-[40%] relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full px-3 py-2.5 bg-[#363659] text-white rounded-md border border-transparent focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all duration-300 cursor-pointer h-full"
                >
                  <span className="flex items-center gap-2">
                    <img
                      src={`https://flagcdn.com/w20/${formData.countryIso}.png`}
                      alt={formData.countryIso}
                      className="w-5 h-auto object-contain rounded-[2px]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="text-sm font-medium">{formData.countryCode}</span>
                  </span>
                  <span className="text-xs text-white/50">▼</span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-[#1a1a3a] border border-cyan-300/30 rounded-md shadow-2xl z-50 custom-scrollbar">
                    {countries.map((country) => (
                      <button
                        key={`${country.iso}-${country.code}`}
                        type="button"
                        onClick={() => {
                          const formatted = formatPhone(formData.phone, country.format);
                          setFormData({
                            ...formData,
                            countryCode: country.code,
                            countryIso: country.iso,
                            phone: formatted,
                          });
                          setIsDropdownOpen(false);
                        }}
                        className="flex items-center gap-3 w-full px-3 py-2 hover:bg-[#363659] text-white text-left transition-colors text-sm"
                      >
                        <img
                          src={`https://flagcdn.com/w20/${country.iso}.png`}
                          alt={country.name}
                          className="w-5 h-auto object-contain rounded-[2px]"
                        />
                        <span>{country.name} ({country.code})</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={countries.find(c => c.iso === formData.countryIso)?.placeholder || "Mobile Number"}
                required
                className="px-4 py-2.5 bg-[#363659] text-white outline-none rounded-md w-[60%] placeholder:text-white/70 focus:ring-2 focus:ring-cyan-300 focus:bg-[#3a3a5a] transition-all duration-300"
              />
            </div>
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
