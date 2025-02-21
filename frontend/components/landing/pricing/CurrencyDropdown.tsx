import React from 'react'
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Currency } from '@/data/pricingData';


interface dropdownData {
    currencies:Currency[],
    currency:Currency,
    setIsOpen:(value:boolean) => void,
    isOpen:boolean
    setCurrency:(currency:Currency) => void,
}



export default function CurrencyDropdown({currencies, currency, setIsOpen, isOpen, setCurrency}:dropdownData) {
  return (
    <div className="flex space-x-4 items-center mt-4 md:mt-0">
          <span>Choose your currency</span>
          <div className="relative w-28">
            <button
              className="flex items-center justify-between w-full px-2 py-2 border rounded-lg shadow bg-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src={currency.flag}
                alt={currency.code}
                width={20}
                height={20}
              />

              <span>{currency.code}</span>

              <ChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
              <div className="absolute left-0 top-12 w-full bg-white border shadow rounded-lg">
                {currencies.map((cur) => (
                  <button
                    key={cur.code}
                    onClick={() => {
                      setCurrency(cur);
                      setIsOpen(false);
                    }}
                    className="flex items-center space-x-2 p-2 hover:bg-gray-100 w-full"
                  >
                    <Image
                      src={cur.flag}
                      alt={cur.code}
                      width={20}
                      height={20}
                    />
                    <span>{cur.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
  )
}
