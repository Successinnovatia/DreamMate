import Header from "@/components/landing/home/Header";
import Hero from "@/components/landing/why-dream-mate/Hero";
import WhyDreammate from "@/components/landing/why-dream-mate/WhyDreammate";
import Faqs from "@/components/landing/why-dream-mate/Faqs";
import Celebrities from "@/components/landing/home/Celebrities";
import Footer from "@/components/landing/home/Footer";
export default function page() {
   
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF6F1]">
      <Header scroll={true} />
      <main className="flex flex-col space-y-4 bg-[#FEF6F1]">
        <Hero/>
        <WhyDreammate/>
        <Faqs/>
        <Celebrities/>
      </main>
      <div className="mt-4"><Footer/></div>
    </div>
  );
}
