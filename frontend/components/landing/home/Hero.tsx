import React from 'react'
import { Button } from '../../ui/button'
import Link from 'next/link'
import { ArrowUpRight} from 'lucide-react'

export default function Hero() {
  return (
    <section className='relative bg-[url(/images/landing-hero.jpg)] bg-no-repeat bg-cover min-h-[80vh] lg:min-h-screen'>
        {/* <div className="absolute w-full h-full pt-5 -z-50">
            <Image src="/images/landing-hero.jpg" alt="hero-background-img" layout="fill" objectFit="cover" 
            priority={true}
            className="h-[800px]"/>
        </div> */}
        <div className='w-5/6 md:w-2/3 mx-auto items-center pt-60'>
          <h1 className='text-white text-center text-2xl md:text-5xl font-serif font-bold tracking-wider leading-relaxed '>Discover <span className='text-primary'>Visionary</span> Partnerships: Your Dream Life starts here</h1>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-2 md:mt-4 items-center justify-center">
            <Button asChild>
              <Link href='/create-account'>Create your Free Account<span><ArrowUpRight /></span></Link>
            </Button>
            <Button asChild className='bg-white text-primary hover:bg-[#E9EFF4CC]'>
              <Link href='/create-account'>Explore Premium Membership</Link>
            </Button>

          </div>
        </div>
    </section>
  )
}
