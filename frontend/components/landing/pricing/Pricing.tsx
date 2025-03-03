import React from 'react'
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { Currency, Plan } from '@/data/pricingData';



interface PricingProps {
  freemiumPlan: Plan;
  premiumPlan: Plan;
  currency: Currency;
  isAnnual: boolean;
}



export function Pricing({freemiumPlan, premiumPlan, currency, isAnnual}:PricingProps) {
  return (
    <div className="mt-10 flex flex-col md:flex-row xl:w-5/6 mx-auto p-2 justify-center gap-4 md:gap-1 bg-white">
        {/*Freemium Plan */}
        <div className="bg-white rounded-lg shadow-md w-full md:w-2/5 p-5 md:p-10 text-left">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/pricing/pricing-logo.png"
              alt="Freemium"
              width={45}
              height={45}
            />
            <div className="flex flex-col">
              <p>DreamMate</p>
              <h3 className="font-bold">Freemium</h3>
            </div>
          </div>
          <p className="text-gray-600 mt-2">{freemiumPlan.description}</p>
          <p className="text-2xl font-bold mt-4">
            {freemiumPlan.priceUSD === 0
              ? `Free`
              : `${currency.symbol}${(
                  freemiumPlan.priceUSD * currency.rate
                ).toFixed(2)}`}{" "}
            <span className="text-sm text-[#4F4D55] font-normal">
              {" "}
              /{isAnnual ? "year" : "month"}
            </span>
          </p>
          <Button asChild className="mt-2 w-48 bg-[#FEF6F1] text-secondary">
            <Link href="/create-account">Get Started</Link>
          </Button>
          {/*conditionally rendered features */}
          <div className="mt-4 hidden">
            <h4 className="font-semibold">{"What's included"}</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {freemiumPlan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/*Vertical Line */}

        <div className="hidden md:block w-1 bg-[#E5E5E5]"></div>

        {/*Premium Plan */}

        <div className="bg-[#FEF6F1] flex flex-col lg:flex-row justify-between md:space-x-4 p-5 md:p-10 rounded-lg shadow-md w-full md:w-3/5 text-left">
          <div>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/pricing/pricing-logo.png"
                alt="Freemium"
                width={45}
                height={45}
              />
              <div className="flex flex-col">
                <p>DreamMate</p>
                <h3 className="font-bold">Premium</h3>
              </div>
            </div>
            <p className="text-gray-600 mt-2">{premiumPlan.description}</p>
            <p className="text-2xl font-bold mt-4">
              {premiumPlan.priceUSD === 0
                ? `Free`
                : `${currency.symbol}${(
                    premiumPlan.priceUSD * currency.rate
                  ).toFixed()}`}{" "}
              <span className="text-sm text-[#4F4D55] font-normal">
                {" "}
                /{isAnnual ? "year" : "month"}
              </span>
            </p>
            <Button asChild className="mt-2 w-48">
              <Link href="/create-account">Get Started</Link>
            </Button>
          </div>

          <div className="mt-4 lg:mt-0">
            <h4 className="font-semibold">{"What's included"}</h4>
            <ul className="list-none text-gray-600 mt-2 space-y-1">
              {premiumPlan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex space-x-2 items-center justify-center"
                >
                  <Check
                    className={`h-5 w-5 p-1 ${
                      i === 0 ? "rounded-full bg-primary  text-white" : ""
                    }`}
                  />{" "}
                  <span className="w-5/6">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}
