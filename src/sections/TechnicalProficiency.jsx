import React, { useRef, useState } from 'react'
import Tabs from '../Components/Tabs';
import { SKILLS, SKILL_TABS } from '../utils/data';
import SkillCard from '../Components/SkillCard';
import {motion} from "framer-motion";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechnicalProficiency = () => {
  const [tabData,setTabData] = useState(SKILLS);
  const [activeTab,setActiveTab] = useState("all");

  const handleTabValueChange = (value)=>{
    if(value == "all"){
      setActiveTab("all");
      setTabData(SKILLS);
      return;
    }
    const updatedList = SKILLS.filter((skill)=>skill.type === value);
    setTabData(updatedList);
    setActiveTab(value);
  }
  useGSAP(() => {
    let tl2 = gsap.timeline({
      scrollTrigger:{
      trigger: ".animationup", // Trigger this element
      scroller:"body",
      start: "top 90%",
      end:"top 30%",
      // markers:true,
      toggleActions: "play none none none",
      scrub:1,
    },
    })
  tl2.from(".animationup",{
      y:100,
      opacity:0,
      duration:0.6,
      delay:0.5,
      stagger: 0.3,
      ease: "power2.out",
  })
}, []);
  return (
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title bg-gradient-to-r from-[#a2c7c9] to-[#00adb4]">
            Technical Proficiency
          </h4>
          <p className="text-sm text-center mt-4 text-white leading-6">
            Aversatile developer with hands-on expertise in modern
            technologies, tools and frameworks, dedicated to building
            efficient , scalable, and user-centric solutions.
          </p>
        </div>
        <Tabs
        tabList={SKILL_TABS}
        activeTab={activeTab}
        onChange={handleTabValueChange}
        />
        <div className="animationup grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[450px]">
        {tabData.map((skill,index)=>(
          <motion.div 
          key={skill.id}
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.4,delay:index*0.1}}
          >
            <SkillCard
              icon={<skill.icon className='animationup w-6 h-6 text-black'/>}
              skillName = {skill.skill}
              description={skill.description}
              progress={skill.progress}
              />
            </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalProficiency