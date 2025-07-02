import React, { useCallback,useState,useEffect } from 'react'
import { PROJECTS } from '../utils/data';
import ProjectCard from '../Components/ProjectCard';
import useEmblaCarousel from 'embla-carousel-react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const MyProject = () => {
    const [emblaRef,emblaApi] = useEmblaCarousel({loop:true,align:"start"});
    const [canScrollPrev , setCanScrollPrev] = useState(false);
    const [canScrollNext , setCanScrollNext] = useState(false);

    const updateScrollButtons = useCallback(()=>{
        if(!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    },[emblaApi]);


    useEffect(() => {
      if(!emblaApi) return;
      emblaApi.on("select",updateScrollButtons);
      updateScrollButtons();
    }, [emblaApi,updateScrollButtons]);
    
  return (
    <div id='projects' className='mt-14'>
        <div className="container bg-orange-100/7 mx-auto px-8 md:px-10 py-10">
            <div className="w-full  rounded-lg lg:w-[60vw] mx-auto">
                <h4 className="section-title bg-gradient-to-r from-[#a2c7c9] to-[#00adb4]">Recent Projects</h4>

                <p className="text-sm text-center text-white mt-4 leading-6">
                    From concept to deployment, these projects showcase my technical
                    expertise. I focus on clean code, performance, and user experience.
                </p>
            </div>
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex pt-14 pb-8">
                        {PROJECTS.map((project)=>(
                            <div
                            key={project.id} 
                            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]"
                            >
                                <ProjectCard
                                key={project.id}
                                imgUrl={project.image}
                                title={project.title}
                                tags={project.tags}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                className={`arrow-btn -left-5 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={()=> emblaApi && emblaApi.scrollPrev()}
                disabled={!canScrollPrev}
                >
                    <IoIosArrowForward className='rotate-180'/>
                </button>
                <button
                className={`arrow-btn -right-5 ${!canScrollNext ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={()=> emblaApi && emblaApi.scrollNext()}
                disabled={!canScrollNext}
                >
                    <IoIosArrowBack className='rotate-180'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default MyProject