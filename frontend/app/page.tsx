
import Header from "@/components/landing/home/Header";
import Hero from "@/components/landing/home/Hero";
import Features from "@/components/landing/home/Features";
import HowItWorks from "@/components/landing/home/HowItWorks";
import WhyDreammate from "@/components/landing/home/WhyDreammate";
import Celebrities from "@/components/landing/home/Celebrities";
import Testimonials from "@/components/landing/home/Testimonials";
import Footer from "@/components/landing/home/Footer";
import CookiesConsent from "@/components/landing/home/CookiesConsent";



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
