import React from 'react'

const StatInfoCard = ({count,label}) => {
  return (
    <div className='flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#fcf4ec]/0 to-[#3e647b] rounded-[14px] p-5'>
        <h1 className="text-4xl text-white md:text-5xl font-medium text-secondary">{count}</h1>
        <p className="text-sm md:text-[16px] font-normal text-white leading-6 whitespace-pre-line">{label}</p>
    </div>
  )
}

export default StatInfoCard