import React from 'react'

const SkillCard = ({icon,skillName,description,progress}) => {
  return (
    <div className='bg-white/5 rounded-xl border border-[#fce8d4] p-6 shadow-md shadow-cyan-500'>
        <div className="flex gap-4">
            <div className="w-10 h-12 flex items-center justify-center bg-gradient-to-b from-[#a2c7c9] to-[#00adb4] rounded-[7px] shadow-md shadow-cyan-500">{icon}</div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <p className="text-[13px] text-gray-200  font-medium">{skillName}</p>
                    <p className='text-xs text-gray-200  font-medium'>{progress}%</p>
                </div>
                <div className="w-full bg-background rounded-md h-[5px] relative mt-2">
                    <div className="bg-[#00989d]  h-[5px]"
                    style={{width:`${progress}%`}}>

                    </div>
                </div>
            </div>
        </div>
        <p className='text-xs text-gray-200 text-justify leading-5 mt-2'>{description}</p>
    </div>
  )
}

export default SkillCard