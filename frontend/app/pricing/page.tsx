import React from 'react'
import Header from '@/components/landing/home/Header'
import PricingHero from '@/components/landing/pricing/PricingHero'
import Celebrities from '@/components/landing/home/Celebrities'
import Testimonials from '@/components/landing/home/Testimonials'
import Footer from '@/components/landing/home/Footer'




export default function page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header scroll={true} />
      <main className="flex flex-col space-y-4 bg-white">
      <PricingHero/>
      <Celebrities/>
      <Testimonials/>
      </main>
     <div className="mt-4"><Footer/></div>
    </div>
  )
}
