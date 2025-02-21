"use client";

import { useState } from "react";
import { Pricing } from "./Pricing";
import {plans, currencies, Currency} from '@/data/pricingData'
import CurrencyDropdown from "./currencyDropdown";



function PricingHero() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [currency, setCurrency] = useState<Currency>(currencies[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const freemiumPlan = plans[isAnnual ? "annually" : "monthly"][0];
  const premiumPlan = plans[isAnnual ? "annually" : "monthly"][1];

  return (
    <section className="text-center pt-32 px-4 pb-4 mb-8">
      <span className="text-xs text-orange-500 bg-[#FEF6F1] px-2 rounded-xl">
        Subscribe
      </span>
      <h2 className="text-3xl font-bold mt-2">Your Access to Connections</h2>
      <p className="max-w-2xl mx-auto text-[#4F4D55] mt-2">
        DreamMate stands out from other platforms by focusing on aspirational
        relationships. Our platform appeals to ambitious individuals who seek
        partners that can help elevate their lifestyle and vice versa. This
        isn’t just about love—it’s about building a life together, where both
        partners bring value and drive each other toward success.
      </p>
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-x-4">
        <div className="flex space-x-4">
          <span>Monthly</span>

          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-12 h-6  rounded-full p-1 flex items-center transition-all ${
              isAnnual ? "bg-gray-300" : "bg-primary"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform ${
                isAnnual ? "translate-x-0" : "translate-x-6"
              } transition-all`}
            ></div>
          </button>

          <span>Annually</span>
        </div>

       <CurrencyDropdown currencies={currencies} currency={currency} setIsOpen={setIsOpen} isOpen={isOpen} setCurrency={setCurrency}/>
      </div>

      <Pricing freemiumPlan={freemiumPlan} premiumPlan={premiumPlan} currency={currency} isAnnual={isAnnual}/>

      
    </section>
  );
}

export default PricingHero;
