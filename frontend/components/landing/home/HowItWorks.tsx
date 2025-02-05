import React from 'react'
import Image from 'next/image'
import { BadgeCard } from '../../ui/badgeCard'

export default function HowItWorks() {
  return (
    <section className='bg-secondary p-6 lg:p-12 xl:p-20 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 rounded-xl m-2'>
      <div className='relative w-full lg:w-2/5 flex justify-center items-center'>
        <Image src="/images/landing-how-it-works.png" width={456} height={456} alt='woman-taking-a-selfie'/>

        <Image src="/images/how-it-works-frame.png" width={148} height={90} alt='frame' className='absolute -bottom-6  lg:bottom-16 xl:bottom-6 -left-10 md:left-20 lg:-left-10'/>
      </div>

      <div className="flex flex-col w-full lg:w-3/5">
        <div className="flex justify-center w-32 h-8 items-center bg-white text-primary px-2 rounded-xl mt-4 lg:mt-0 mb-4">
          <p className='text-sm'>HOW IT WORKS</p>
        </div>
        <h2 className="text-2xl md:text-4xl text-white font-serif font-bold tracking-wider leading-relaxed mb-8">Gain more insight into how Dream mate works</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <BadgeCard text='Sign Up for Free.' subtext='Create a profile that highlights your vision, goals, and relationship preferences.' number='1'/>

          <BadgeCard text='Get Matched' subtext='Our algorithm connects you with people who align with your lifestyle goals.' number='2'/>

          <BadgeCard text='Connect & Communicate' subtext='Start meaningful conversations with people who share your vision for life.' number='3'/>

          <BadgeCard text='Meet Your DreamMate' subtext='Take the next step by meeting your match in real life through private events or personal meetings' number='4'/>
        </div>

      </div>
    </section>
  )
}
