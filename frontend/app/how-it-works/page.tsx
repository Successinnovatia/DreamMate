'use client'
import React from "react";
import Header from "@/components/landing/home/Header";
import { Hero } from "@/components/landing/how-it-works/Hero";
import BookATrip from "@/components/landing/how-it-works/BookATrip";
import Discover from "@/components/landing/how-it-works/Discover";
import Connection from "@/components/landing/how-it-works/Connection";
import VisionaryParnerships from "@/components/landing/how-it-works/VisionaryPartnerships";
import DreammatePremium from "@/components/landing/how-it-works/DreammatePremium";
import Celebrities from "@/components/landing/home/Celebrities";
import Footer from "@/components/landing/home/Footer";


export default function page() {

  
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F5]">
      <Header scroll={true} />
      <main className="flex flex-col space-y-4 bg-[#F7F5F5]">
        <Hero/>
        <BookATrip />
        <Discover/>
        <Connection/>
        <VisionaryParnerships/>
        <DreammatePremium/>
        <Celebrities/>
      </main>

      <div className="mt-4"><Footer/></div>
    </div>
  );
}
