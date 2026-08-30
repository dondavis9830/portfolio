import React, { useState } from "react";


export default function LandinPage() {

  const [uerName,setUsername]=useState("")
 
   function send(){
     alert('message sended')
   }

  return (
    <div className="min-h-screen overflow-x-hidden bg-linear-to-r from-gray-300 via-white to-gray-300">

      {/* INTRODUCTION SECTION */}
      <section id="home" className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 lg:gap-20 px-5 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 bg-linear-to-r from-gray-300 via-white to-white">

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col md:items-end text-center md:text-left">
          <p className="pb-3 text-blue-800 text-sm sm:text-base">
            Get Every Single Solution
          </p>

          <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-indigo-600">
              Frontend Developer
            </span>
          </h1>

          <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold mt-2">
            Don Davis
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-bold pt-4">
            Let's Work Together to Create Wonders with Me
          </p>

          <div className="flex justify-center md:justify-start items-center pt-5">
            <a  href="https://www.linkedin.com/in/don-davis-b79810418" target="_blank" rel="noreferrer"  >
              <img
                className="w-7 sm:w-8 hover:scale-110 transition"
                src="https://www.svgrepo.com/show/510045/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-start">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.CuGKAbUQ9ppaXV7opMjfVAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Profile"
            className="w-56 sm:w-62 md:w-90 lg:w-120 h-auto object-cover"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section  id="about"    className="py-16 sm:py-20 px-5 sm:px-8 lg:px-20" >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.CuGKAbUQ9ppaXV7opMjfVAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="text-blue-600 font-semibold tracking-widest text-sm sm:text-lg mb-4">
              ABOUT ME
            </p>

            <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6">
              Turning Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-indigo-600">
                Digital Experiences.
              </span>
            </h2>

            <p className="leading-7 sm:leading-8 mb-5 text-sm sm:text-base">
              I'm a passionate web developer who enjoys transforming creative
              ideas into clean, responsive, and user-friendly websites.
            </p>

            <p className="leading-7 sm:leading-8 text-sm sm:text-base">
              I have experience working with HTML, CSS, JavaScript, Bootstrap,
              and Tailwind CSS. Currently, I'm exploring the MERN stack and
              working toward becoming a full-stack developer.
            </p>
          </div>
        </div>
      </section>

      {/* Just Intro */}
      <section className="grid gap-6 md:grid-cols-3 mx-20">

        {/* Design */}
        <div className="group rounded-2xl p-6 bg-white hover:-translate-y-1 duration-300 hover:shadow-xl">
          <div className="flex h-14 w-14 items-center ">
            <img className="opacity-60 w-full" src="https://www.svgrepo.com/show/435299/design.svg" alt="" />
          </div>
          <h2 className=" text-2xl font-bold">
            Design
          </h2>
          <p className="mt-3 leading-7">
            Creating clean, modern, and attractive user interfaces with a focus
            on great user experience.
         </p>
        </div>
      
        {/* Development */}
        <div className="group rounded-2xl  p-6  bg-white hover:-translate-y-1 duration-300 hover:shadow-xl">
          <div className="flex h-14 w-14 items-center justify-center ">
            <img className="opacity-60 w-full" src="https://www.svgrepo.com/show/427632/development-education-improvement.svg" alt="" />
          </div>
          <h2 className=" text-2xl font-bold">
            Development
          </h2>
          <p className="mt-3 leading-7">
            Building responsive and interactive websites using HTML, CSS,
            JavaScript, React, and Tailwind CSS.
          </p>
        </div>
            
        {/* Maintenance */}
        <div className="group rounded-2xl  p-6  bg-white hover:-translate-y-1 duration-300 hover:shadow-xl">
          <div className="flex h-14 w-14 items-center justify-center ">
            <img className="opacity-60 w-full"  src="https://www.svgrepo.com/show/422232/gear-maintenance-repair.svg" alt="" />
          </div>
          <h2 className=" text-2xl font-bold">
            Maintenance
          </h2>
          <p className="mt-3 leading-7">
            Updating, improving, and maintaining websites to keep them fast,
            responsive, and user-friendly.
          </p>
        </div>
      </section>


      {/* EXPLORE */}
      <div className="flex flex-col mt-5 justify-center items-center text-xl sm:text-2xl md:text-3xl px-4 text-center">
        <p>| EXPLORE |</p>
        <p className="pt-5">
          <i className="fa-solid fa-angles-down fa-bounce"></i>
        </p>
      </div>


      {/* SKILLS SECTION */}
      <section id="skills" className="py-5 sm:py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10 sm:mb-12">
            <p className="text-cyan-800 font-medium mb-2">
              WHAT I KNOW
            </p>

            <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold">
              My <span className="text-cyan-400">Skills</span>
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Technologies and tools I use to build modern, responsive and
              user-friendly web experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">

            {[
              ["HTML5", "https://www.svgrepo.com/show/452228/html-5.svg"],
              ["CSS3", "https://www.svgrepo.com/show/452185/css-3.svg"],
              ["JavaScript", "https://www.svgrepo.com/show/353925/javascript.svg"],
              ["React.js", "https://www.svgrepo.com/show/354259/react.svg"],
              ["Tailwind CSS", "https://www.svgrepo.com/show/333609/tailwind-css.svg"],
              ["Bootstrap", "https://www.svgrepo.com/show/353498/bootstrap.svg"],
              ["Github", "https://www.svgrepo.com/show/512317/github-142.svg"],
              ["Git", "https://www.svgrepo.com/show/452210/git.svg"],
              ["Flowbite", "https://vectorseek.com/wp-content/uploads/2025/01/Flowbite-Logo-Vector.svg-.png"],
              ["Figma", "https://www.svgrepo.com/show/448222/figma.svg"],
            ].map(([name, image]) => (
              <div   key={name}   className="p-4 sm:p-6 md:p-8 text-center hover:-translate-y-1 transition duration-300" >
                <img  src={image}  alt={name}  className="w-20 h-20 sm:w-16 sm:h-16 mx-auto object-contain" />
                <h1 className="text-sm sm:text-lg md:text-xl font-bold mt-3 wrap-break-word">
                  {name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className='py-5 sm:py-20 px-5 sm:px-8'>
        <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold">
              My <span className="text-cyan-400">Education</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              My educational journey has helped me build a strong foundation in technology.
            </p>
          </div>
          <div className="flex justify-center gap-20">
            
            {/* card-1 */}
            <div className="max-w-md w-120 rounded-2xl border border-slate-400 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* Icon and Status */}
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-200 text-2xl">
                  🎓
                </div>
                <span className="rounded-full bg-green-200 px-3 py-1 text-sm font-medium text-green-800">
                  ● Compleated
                </span>
              </div>
              {/* Education Details */}
              <h2 className="text-xl font-bold">
                BCA 
              </h2>
              <p className="mt-2">
                Bachelor of Computer Applications
              </p>
              <div className="mt-5 border-t border-slate-400 pt-4">
                <p className="font-medium">
                  Bharathiar University
                </p>
                <p className="mt-1 text-sm">
                  📅 2019 - 2022
                </p>
              </div>
            </div>
            {/* card-2 */}
            <div className="max-w-md w-120 rounded-2xl border border-slate-400 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* Icon and Status */}
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-200 text-2xl">
                  <img src="https://www.svgrepo.com/show/503832/ritual-axis.svg" alt="" />
                </div>
                <span className="rounded-full bg-green-200 px-3 py-1 text-sm font-medium text-green-800">
                  ● In Progress
                </span>
              </div>
              {/* Education Details */}
              <h2 className="text-xl font-bold">
                MERN Stack Development
              </h2>
              <p className="mt-2">
                Full Stack Web Development Internship Program
              </p>
              <div className="mt-5 border-t border-slate-400 pt-4">
                <p className="font-medium">
                  Luminar Technolab
                </p>
                <p className="mt-1 text-sm">
                  📅 2026 – Present
                </p>
              </div>
            </div>
          </div>
      </section>
      


      {/* PROJECTS SECTION */}
      <section id="projects" className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12">

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            A collection of projects that showcase my skills in web design and front-end development.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Project 1 */}
          <div className="p-4 rounded-lg shadow-md hover:shadow-xl transition">
            <div className="w-full overflow-hidden rounded-lg">
              <video controls className="w-full h-auto">
                <source src="/Video/arogya yoga.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-slate-900 text-base sm:text-xl">
                Project Name:
              </span>

              <p className="font-bold text-base sm:text-xl">
                Arogya Yoga
              </p>
            </div>

            <p className="mt-2 text-sm sm:text-base">
              This is a static webpage of a yoga class.
            </p>

            <a href="https://lucent-clafoutis-3b3576.netlify.app/" className="inline-block mt-3 text-cyan-600 font-semibold" >
              Live Link <i className="fa-solid fa-link"></i>
            </a>
          </div>


          {/* Project 2 */}
          <div className="p-4 rounded-lg shadow-md hover:shadow-xl transition">
            <video controls className="w-full h-auto rounded-lg">
              <source src="/Video/gym.mp4" type="video/mp4" />
            </video>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-base sm:text-xl">  Project Name: </span>

              <p className="font-bold text-base sm:text-xl"> Power Pulse Gym </p>
            </div>

            <p className="mt-2 text-sm sm:text-base"> This is a static webpage of a gym. </p>

            <a href="https://power-pulse-gym.netlify.app/" className="inline-block mt-3 text-cyan-600 font-semibold" >
              Live Link <i className="fa-solid fa-link"></i>
            </a>
          </div>


          {/* Project 3 */}
          <div className="p-4 rounded-lg shadow-md hover:shadow-xl transition">
            <video controls className="w-full h-auto rounded-lg">
              <source
                src="/Video/Black Pearl.mp4"
                type="video/mp4"
              />
            </video>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-base sm:text-xl">
                Project Name:
              </span>

              <p className="font-bold text-base sm:text-xl">
                Hotel Black Pearl
              </p>
            </div>

            <p className="mt-2 text-sm sm:text-base">
              This is a static website of Hotel Black Pearl.
            </p>

            <a  href="https://hotal-black-pearl.netlify.app/" className="inline-block mt-3 text-cyan-600 font-semibold" >
              Live Link <i className="fa-solid fa-link"></i>
            </a>
          </div>


          {/* Project 4 */}
          <div className="p-4 rounded-lg shadow-md hover:shadow-xl transition">
            <video controls className="w-full h-auto rounded-lg">
              <source
                src="/Video/Oryn Events.mp4"
                type="video/mp4"
              />
            </video>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-base sm:text-xl">
                Project Name:
              </span>

              <p className="font-bold text-base sm:text-xl">
                Oryn Events
              </p>
            </div>

            <p className="mt-2 text-sm sm:text-base">
              This is a static website of an event management.
            </p>

            <a href="https://oryn-events.netlify.app/" className="inline-block mt-3 text-cyan-600 font-semibold" >
              Live Link <i className="fa-solid fa-link"></i>
            </a>
          </div>


          {/* Project 5 */}
          <div className="p-4 rounded-lg shadow-md hover:shadow-xl transition">
            <video controls className="w-full h-auto rounded-lg">
              <source
                src="/Video/Doon School.mp4"
                type="video/mp4"
              />
            </video>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-base sm:text-xl">
                Project Name:
              </span>

              <p className="font-bold text-base sm:text-xl">
                Doon Public School
              </p>
            </div>

            <p className="mt-2 text-sm sm:text-base">
              This is a static dashboard of Doon Public School.
            </p>

            <a href="https://doon-school.netlify.app/" className="inline-block mt-3 text-cyan-600 font-semibold" >
              Live Link <i className="fa-solid fa-link"></i>
            </a>
          </div>

        </div>
      </section>
      <section id="service" className='py-5 sm:py-20 px-5 sm:px-8 flex flex-col'>
        <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold">
              My <span className="text-cyan-400">Services</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              I create modern, responsive, and user-friendly web experiences with a focus on clean design and smooth functionality.
            </p>
        </div>
        <div className='grid grid-cols-3 gap-5 mx-20'>
            {/* card-1 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"> 
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100">
                <img src="https://www.svgrepo.com/show/261946/responsive-tablet.svg"  alt="Design service" className="h-8 w-8 object-contain" />
              </div>
              <h1 className="text-xl font-bold">Responsive Web Development</h1>
              <p className="mt-3 text-sm leading-6">
                Building responsive websites that work smoothly across mobile, tablet, and desktop devices.
              </p>
            </div>
            {/* card-2 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"> 
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100">
                <img src="https://www.svgrepo.com/show/452092/react.svg"  alt="Design service" className="h-8 w-8 object-contain" />
              </div>
              <h1 className="text-xl font-bold">React Development</h1>
              <p className="mt-3 text-sm leading-6">
                Creating dynamic and interactive user interfaces using React and reusable components.
              </p>
            </div>
            {/* card-3 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"> 
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100">
                <img src="https://www.svgrepo.com/show/395657/user-interface.svg"  alt="Design service" className="h-8 w-8 object-contain" />
              </div>
              <h1 className="text-xl font-bold">UI Implementation</h1>
              <p className="mt-3 text-sm leading-6">
                Turning designs and ideas into clean, modern, and user-friendly web interfaces.
              </p>
            </div>
            {/* card-4 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"> 
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100">
                <img src="https://www.svgrepo.com/show/261883/landing-page.svg"  alt="Design service" className="h-8 w-8 object-contain" />
              </div>
              <h1 className="text-xl font-bold">Landing Page Developmentt</h1>
              <p className="mt-3 text-sm leading-6">
                Designing attractive and high-converting landing pages for portfolios, businesses, and products.
              </p>
            </div>
            {/* card-5 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"> 
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100">
                <img src="https://www.svgrepo.com/show/444470/gui-process.svg"  alt="Design service" className="h-8 w-8 object-contain" />
              </div>
              <h1 className="text-xl font-bold">Website Redesign</h1>
              <p className="mt-3 text-sm leading-6">
                Improving existing websites with modern designs, better responsiveness, and enhanced user experience.
              </p>
            </div>
            {/* card-6 */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"> 
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100">
                <img src="https://www.svgrepo.com/show/97319/optimization.svg"  alt="Design service" className="h-8 w-8 object-contain" />
              </div>
              <h1 className="text-xl font-bold">Frontend Optimization</h1>
              <p className="mt-3 text-sm leading-6">
                Writing clean and efficient frontend code for a smooth and better user experience.
              </p>
            </div>
        </div>

      </section>
      <section id="contact" className='py-5 sm:py-20 px-5 sm:px-8'>
        <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold">
              <span className="text-cyan-400">Contact</span> Me
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Have a project or idea in mind? Let's connect and create something amazing together. Feel free to reach out! 
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
              <h2 className="text-2xl font-bold">
                Get In Touch
              </h2>
              <p className="mt-2"> Have a project or idea? Feel free to send me a message.</p>     
              <form className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium"> 
                    Your Name
                  </label>
                  <input onChange={(e)=>setUsername(e)} type="text" placeholder="Enter your name" className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium"> 
                    Email Address
                  </label>
                  <input type="email" placeholder="Enter your email" className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"/>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium"> 
                    Your Message
                  </label>
                  <textarea rows="3" placeholder="Write your message..." className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"></textarea>
                </div>
                <button onClick={send} type="button" className="w-full rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
      </section>
    </div>
  );
}