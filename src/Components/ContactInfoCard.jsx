import React from 'react'

const ContactInfoCard = ({icon,text}) => {
  return (
    <div className=" flex items-center gap-5 bg-white/5 rounded border border-[#7fc4c8]  px-4 py-3 mb-5">
        <div className="w-10 h-10 text-xl text-[#7fc4c8]  flex items-center justify-center bg-gradient-to-r border-2 rounded-lg">
            {icon}
        </div>
        <p className="text-xs text-[#7fc4c8]  md:text-sm">{text}</p>
    </div>
  )
}

export default ContactInfoCard