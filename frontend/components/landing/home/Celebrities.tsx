import { MarqueeImages } from "../../ui/marqueeImages";

export default function Celebrities() {
  return (
    <section className="bg-white mx-2 p-4 rounded-lg">
      <div className="bg-[#FAF5EF] rounded-lg pt-10 pb-8 overflow-hidden">
        <div className="w-full md:w-5/6 lg:w-3/5 xl:w-1/3 mx-auto text-center mb-5">
          <h3 className="font-serif font-bold text-3xl ">
            Over 5000+ Celebrities and Professionals{" "}
            <span className="text-primary">to check</span>
          </h3>
        </div>

        <div className=" space-y-4">
          <div className="transform rotate-3">
            <div className="animate-marquee">
              {/*first Marquee */}
              <MarqueeImages />
            </div>
          </div>
          <div className="transform rotate-3 ">
            <div className="animate-marquee-reverse">
              {/*second Marquee */}
              <MarqueeImages />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
