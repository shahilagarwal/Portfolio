import React from 'react'
import { useState } from 'react';
import { IoMenu ,IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-[rgba(0,0,0,0.1)] sticky ">
      <h2 className="text-2xl font-bold">Shahil</h2>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-7">
        <a href="#" className="hover:text-blue-500 ">Home</a>
        <a href="#" className="hover:text-blue-500">About</a>
        <a href="#" className="hover:text-blue-500">Skills</a>
        <a href="#" className="hover:text-blue-500">Work Experience</a>
        <a href="#" className="hover:text-blue-500">Contact Me</a>
        <button className="bg-[rgb(1,215,252)] text-white px-4 py-2 rounded-md">Hire Me</button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <IoClose className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <IoMenu className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-start gap-4 p-4 shadow-md md:hidden z-50">
          <a href="#" className="hover:text-blue-500 w-full">Home</a>
          <a href="#" className="hover:text-blue-500 w-full">About</a>
          <a href="#" className="hover:text-blue-500 w-full">Skills</a>
          <a href="#" className="hover:text-blue-500 w-full">Work Experience</a>
          <a href="#" className="hover:text-blue-500 w-full">Contact Me</a>
          <button className="bg-[rgb(1,215,252)] text-white px-4 py-2 rounded-md w-full text-center">Hire Me</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar