import React from 'react'

export default function Footer() {
  return (
    <div>
      <section className='px-20 py-10 bg-gray-800'>
          <div className='flex justify-center gap-10 text-white ps-10'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">services</a>
            <a href="#projects">Projects</a>
            <a href="#service">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className='flex justify-center gap-10 text-white p-10'>
            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram fa-lg"></i></a>
            <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube fa-lg"></i></a>
            <a href=""><i class="fa-brands fa-github fa-lg"></i></a>
            <a href=""><i class="fa-brands fa-x-twitter fa-lg"></i></a>
          </div>
          <p className='text-center text-white pb-5'>© 2026 Your Company, Inc. All rights reserved.</p>
      </section>
    </div>
  )
}
