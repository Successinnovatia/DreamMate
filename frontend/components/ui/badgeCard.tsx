import React from 'react'

export  function BadgeCard({text, subtext, number}:{text:string, subtext:string, number:string}) {
  return (
    <div className='flex flex-col'>
      <div className="bg-primary flex rounded-full text-white w-12 h-12 justify-center items-center mb-6"><p className='text-2xl'>{number}</p></div>

      <h4 className='text-xl text-white mb-3'>{text}</h4>

      <p className='text-[#F7F5F5]'>{subtext}</p>
    </div>
  )
}
