import React from 'react'
import Image from 'next/image'

export function FeaturesCard({text, subtext}:{text:string, subtext:string}) {
  return (
    <div className='flex flex-col space-y-4 bg-[#FEF6F1] p-4 rounded-xl h-full shadow-md' >
        <Image src={'/images/logo-orange-notext.svg'} alt="dreammate-logo" width={70} height={47} />

        <h3 className='text-secondary lg:text-xl font-serif'>{text}</h3>
        <p className='text-[#656565]'>{subtext}</p>
    </div>
  )
}
