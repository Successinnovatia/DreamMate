import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhyDreammate from "@/components/WhyDreammate";
import Celebrities from "@/components/Celebrities";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CookiesConsent from "@/components/CookiesConsent";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F5]">
      <Header scroll={false}/>

      <main className="bg-[#F7F5F5]">
        <Hero/>
        <Features/>
        <HowItWorks/>
        <WhyDreammate/>
        <Celebrities/>
        <Testimonials/>
      </main>
      <Footer/>
      <CookiesConsent/>
    </div>
    
  );
}
