import React from "react";
import FaqItem from "./FaqItem";


interface FaqItemProps {
    question:string,
    answer:string,
}

const faqsData:FaqItemProps[] = [
    {
        question:' How is DreamMate different from other dating platforms?',
        answer:'DreamMate is for individuals who seek more than just romance—it’sabout meeting someone who shares your dreams, goals, and aspirations.'
    },
    {
        question:'Is DreamMate only for wealthy individuals?',
        answer:' DreamMate is designed for ambitious, successful individuals—whether you’ve already achieved your goals or are working towards them.'
    },
    {
        question:'What is DreamMate Premium?',
        answer:'DreamMate Premium offers exclusive benefits, such as unlimited messaging, video calls, invites to luxury events, and advanced matchmaking features.'
    },
]

function Faqs() {
  return (
    <section className="relative py-14 md:py-20 bg-white px-2 md:mr-4">
      {/* Top Curve */}
      <div className="absolute bg-[#FEF6F1] top-0 left-0 w-full">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1452 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 56.7955H352.838C611.719 56.7955 866.935 0 1089 0C1311.06 0 1452 56.7955 1452 56.7955V102H0V56.7955Z"
            fill="white"
          />
        </svg>
      </div>

      {/* FAQ Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mt-8">
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
          FAQ
        </span>
        <h2 className="text-3xl font-bold mt-4">Frequently Asked Questions</h2>
        <p className="text-[#556987] mt-2">
          DreamMate is for individuals who aren’t just looking for love but a
          partner who shares their ambitions and dreams of living a successful,
          luxurious, and visionary lifestyle.
        </p>

        {/* FAQ Items */}
       {faqsData.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer}/>
       ))}
      </div>
    </section>
  );
}

export default Faqs;
