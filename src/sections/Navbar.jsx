import React, { useEffect, useRef, useState } from 'react'
import { MENU_LINKS } from '../utils/data';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(true);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        const handleResize = ()=>{
            if(window.innerWidth>=768){
                setIsOpen(true);
            }
            else{
                setIsOpen(false);
            }
        }
    handleResize();
    window.addEventListener("resize",handleResize);
      return () => {
        window.removeEventListener("resize",handleResize);
      }
    }, [])
    const navRef = useRef();
    useGSAP(() => {
        gsap.from(navRef.current.querySelectorAll('li,h1'), {
        y: -60,
        opacity: 0,
        delay: 1,
        duration:0.7,
        stagger: 0.15,
        ease: "power2.out",
    });
}, []);
  return (
    <nav className='container mx-auto sticky top-5 z-10'>
        <div ref={navRef} className="flex items-center justify-between rounded-full bg-orange-100/5 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0">
            <h1  className='h-7 text-2xl ml-6 mb-1 bg-gradient-to-r from-[#a2c7c9] to-[#00adb4] text-transparent bg-clip-text font-semibold'>Shahilag</h1>
            <button
             className="block md:hidden text-white mr-6 focus:outline-none"
             onClick={toggleMenu}
            >
                {isOpen ? (<IoMdClose  className='text-2xl'/>):(<HiMenuAlt3 className='text-2xl'/>)}
            </button>
            <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`} ref={navRef}>
                {MENU_LINKS.map((item)=>(
                    <li key={item.id}>
                        <Link 
                        activeClass="active"
                        to={item.to}
                        smooth
                        spy
                        offset={item.offset}
                        className="relative cursor-pointer text-white text-lg
                            before:content-[''] before:absolute before:w-0 before:h-[3px] before:rounded-full
                            before:-bottom-1 before:left-0 before:transition-all before:duration-300
                            before:bg-gradient-to-r before:from-[rgb(12, 171, 211)] before:to-[rgb(1,215,252)]
                            hover:before:w-full"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className='hidden md:block h-12 text-[17px] font-medium text-white bg-gradient-to-r from-[#8eb0b2] to-[#00adb4] text-shadow-xs text-shadow-black
                rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105'>Hire Me</button>
        </div>
    </nav>
  )
}

export default Navbar