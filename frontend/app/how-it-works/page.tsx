'use client'
import React from "react";
import Header from "@/components/Header";
import { Hero } from "@/components/how-it-works/Hero";
import BookATrip from "@/components/how-it-works/BookATrip";
import Discover from "@/components/how-it-works/Discover";
import Connection from "@/components/how-it-works/Connection";


export default function page() {

  
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F5]">
      <Header scroll={true} />
      <main className="bg-[#F7F5F5]">
        <Hero/>
        <BookATrip />
        <Discover/>
        <Connection/>
      </main>
    </div>
  );
}
