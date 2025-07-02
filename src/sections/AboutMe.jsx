import React from 'react';
import PROFILE_PIC from "../assets/images/img4.jpg";
import { ABOUT_ME } from "../utils/data";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useGSAP(() => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section", 
        start: "top 50%",
        end: "top 20%",
        toggleActions: "play none none none",
        markers: true,
        scrub: 1.5,                
      },
    });

    tl2.from(".animationleft", {
      x: -100,
      opacity: 0,
      duration: 0.6,
      delay:0.3,
      stagger: 0.2,
      ease: "power2.out",
    })
    .from(".animationright", {
      x: 100,
      opacity: 0,
      duration: 0.6,
      delay:0.3,
      stagger: 0.2,
      ease: "power2.out",
    })
    .from(".animationdown", {
      y: 60,
      opacity: 0,
      duration: 0.3,
      delay:0.3,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div id="about" className="about-section container border-2 border-r-[#a2c7c9] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h4 className="block lg:hidden text-3xl font-bold section-title bg-gradient-to-r from-[#a2c7c9] to-[#00adb4] text-center py-2 mb-8 rounded-md">
        About Me
      </h4>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-25">
        <div className="animationleft w-full h-[430px] sm:w-3/4 md:w-1/2 lg:w-[350px]">
          <img src={PROFILE_PIC} alt="profile pic" className="w-full h-full rounded-lg shadow-lg object-cover" />
        </div>
        <div className="flex-1 border-2">
          <h4 className="hidden lg:block text-4xl font-bold section-title bg-gradient-to-r from-[#a2c7c9] to-[#00adb4] text-left py-2 px-4 mb-6 rounded-md w-max">
            About Me
          </h4>
          <p className="animationright text-base text-white md:text-md text-justify leading-relaxed whitespace-pre-line">
            {ABOUT_ME.content}
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {ABOUT_ME.socialLinks.map((item) => (
              <a key={item.label} className="cursor-pointer group">
                <item.icon className="animationdown text-2xl md:text-3xl text-[#51bec2] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#9ff6f9]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
