import React from 'react'
import { FeaturesCard } from '../../ui/featuresCard'
import { MetricsCard } from '../../ui/metricsCard'

export default function Features() {
  return (
    <section className='bg-[#F7F5F5] pt-4 lg:pt-20'>
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-16 w-full px-10 md:px-16 pt-20  pb-10 bg-white">
            <div className="flex flex-col space-y-2">
                <h1 className='text-secondary font-serif text-2xl md:text-3xl lg:text-5xl'>Always stands out</h1>

                <p className="text-[#656565] text-wrap md:w-3/4">DreamMate connects ambitious individuals looking for relationships that match their lifestyle and goals. Live the life you want with someone who shares your vision.</p>

                <MetricsCard/>
            </div>
            <FeaturesCard text='Visionary Partnerships:' subtext='Find a partner who not only loves you but also shares your dreams and aspirations'/>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-stretch space-y-4 md:space-y-0 md:space-x-6 w-full px-10 md:px-14 pb-20 bg-white">
         <div className="flex-1">
          <FeaturesCard text='Exclusive Events:' subtext='DreamMate connects ambitious individuals looking for relationships that match their lifestyle and goals. Live the life you want with someone who shares your vision.'/>
         </div>

          <div className="flex-1">
            <FeaturesCard text='Personalized Matchmaking:' subtext='Let our team of experts find the perfect match based on your lifestyle, goals, and personal preferences'/>
          </div>

          <div className="flex-1">
            <FeaturesCard text='Financial Empowerment:' subtext='Whether you’re looking for mentorship, business support, or financial freedom, DreamMate helps you find the right match to build your dream life together."'/>
          </div>
        </div>
        <div className="w-5/6 md:w-2/5 mx-auto pt-8 pb-14">
          <p className="text-sm text-[#656565]">
            "Find a partner who not only loves you but also shares your dreams and aspirations."
          </p>
        </div>
    </section>
  )
}
