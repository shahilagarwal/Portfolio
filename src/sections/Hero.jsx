import React from 'react'
import PROFILE_PIC from "../assets/images/img4.jpg"
import { STATS } from '../utils/data'
import StatInfoCard from '../Components/StatInfoCard'
import RESUME from "../assets/resume/shahil_cv.pdf"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Hero = () => {
    useGSAP(()=>{
        gsap.from(".animation",{
            x:-100,
            opacity:0,
            duration:0.7,
            delay:1,
            stagger:0.4,
            ease:true
        })
        gsap.from(".animation2",{
            x:100,
            opacity:0,
            duration:0.7,
            delay:1,
            stagger:0.4,
            ease:true
        })
    })
  return (
    <section id="hero" className='container mx-auto px-8'>
        <div className="flex flex-col mb-50 lg:flex-row gap-14 items-center justify-between mt-[80px]">
            <div className="order-2 lg:order-1 text-centerlg:text-left mt-16 lg:mt-0">
                <h3 className="animation text-xl lg:text-2xl font-medium text-white">Hi,I'm Shahil Agarwal</h3>
                <h1 className=" animation w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] 
                 lg:leading-[60px] mt-3 bg-gradient-to-r from-[#a2c7c9] to-[#00adb4] text-transparent bg-clip-text 
                ">Building Scalable & User Centric Web Apps</h1>

                <p className="animation w-full lg:w-[500px] text-sm lg:text-base mt-4 text-white">
                    I'm a passionate MERN Stack Developer crafting responsive,
                    accessible, and dynamic web experiences using React,Node.js,Express.js, MongoDb and 
                    TailwindCSS.
                </p>
                <div className=" animation flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
                    <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim text-shadow-md text-shadow-black ">View My Work</button>
                    <a href={RESUME} download="shahil_resume"><button className="flex-1 action-btn btn-scale-anim bg-gradient-to-r from-[#8eb0b2] to-[#00adb4] text-white text-shadow-xs text-shadow-black">Download Resume</button></a>
                </div>
            </div>
            <div className="animation2 w-[300px] md:w-[370px] h-[350px] md:h-[428px] rounded-3xl relative order-1 lg:order-2">
                <img src={PROFILE_PIC} alt="Profile Pic" className='profile-pic rounded-b-full shadow-2xl shadow-cyan-500/100'/>
            </div>
        </div>
        {/* <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
            {STATS.map((item)=>(
                <StatInfoCard key={item.id} count={item.count} label={item.label}/>
            ))}
        </div> */}
    </section>
  )
}

export default Hero