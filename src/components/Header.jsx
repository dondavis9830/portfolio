import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleMobileNavigation = (e) => {
    const value = e.target.value;

    if (value.startsWith("#")) {
      const section = document.querySelector(value);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      navigate(value);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-linear-to-r from-cyan-400 via-blue-200 to-cyan-400 shadow-md">
      
      <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between px-4 sm:px-6 md:px-10">
        
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8644/8644474.png"
            className="w-7 sm:w-8 md:w-10"
            alt="Portfolio icon"
          />

          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold">
            Portfolio
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-8 text-sm lg:text-base">
            
            <li><Link to={'/#home'} className="hover:text-blue-700 transition">Home</Link></li>

            <li><a href="#skills" className="hover:text-blue-700 transition">Skills</a></li>

            <li><a href="#education" className="hover:text-blue-700 transition">Education</a></li>

            <li><a href="#projects" className="hover:text-blue-700 transition">Projects</a></li>

            <li><a href="#service" className="hover:text-blue-700 transition">Services</a></li>

            <li><Link to={'/gsap'} className="hover:text-blue-700 transition">gsap</Link></li>

            <li><a href="#contact" className="rounded-lg bg-orange-300 px-3 py-2 text-sm font-medium hover:bg-orange-400 transition lg:px-4"> Get Free Consultant</a></li>

          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="block md:hidden">
          <select onChange={handleMobileNavigation} defaultValue="" className="rounded-lg border border-gray-300 bg-orange-300 px-2 py-1.5 text-sm outline-none sm:px-3" >
            <option value="" disabled>Menu </option>
            <option value="/">Home</option>
            <option value="#about">About</option>
            <option value="#skills">Skills</option>
            <option value="#projects">Projects</option>
            <option value="/contact">Contact</option>
            <option value="/gsap">gsap</option>
            <option value="/consult">Consultant</option>
          </select>
        </div>

      </div>
    </header>
  );
}