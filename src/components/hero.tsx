"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100dvh+5rem)] overflow-hidden bg-black flex items-start md:items-center">
      
      {/* Background Hero Images (Responsive) */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Desktop Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776454645/hero-image-desktop_xqgrn0.webp" 
          alt="Lowkos Auto Clinic - Hero Desktop"
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        {/* Mobile Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776454645/hero-image-mobile_c273ex.webp" 
          alt="Lowkos Auto Clinic - Hero Mobile"
          className="md:hidden absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
      </div>

      {/* Content: Pushed below navbar (80px) + safe area */}
      <div className="container absolute inset-x-0 top-1/2 z-10 mx-auto -translate-y-1/2 px-5 sm:relative sm:top-auto sm:translate-y-0 sm:px-8 lg:px-8 md:pt-0">
        <div className="max-w-[17rem] sm:max-w-lg md:max-w-3xl lg:max-w-5xl">
          
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-black italic uppercase tracking-tighter text-[3.1rem] leading-[0.95]
                       sm:text-[4.25rem] sm:leading-[0.92] md:text-[7.5rem] lg:text-[9.25rem]"
          >
            <span className="text-racing-yellow">CLEAN </span>
            <span className="text-white">AND</span>
            <br />
            <span className="text-racing-yellow">TREAT </span>
            <span className="text-white">YOUR</span>
            <br />
            <span className="text-white">ENGINE</span>
          </motion.h1>

          {/* Yellow Slanted Banner */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative mt-5 inline-flex max-w-[15rem] items-center sm:mt-6 sm:max-w-full md:mt-10"
          >
            <div className="flex items-center gap-3 bg-racing-yellow px-4 py-2 shadow-lg skew-x-[-15deg] md:gap-4 md:px-10 md:py-3">
              <span className="text-black font-black italic text-[0.7rem] leading-tight uppercase tracking-[0.16em] skew-x-[15deg] sm:text-sm sm:tracking-wider md:text-xl">
                Inovasi Performa, Keahlian Kami
              </span>
              {/* Racing Stripes */}
              <div className="hidden sm:flex gap-1 skew-x-[15deg] ml-2 md:ml-4">
                <div className="w-1.5 h-5 md:h-6 bg-black skew-x-[-20deg]" />
                <div className="w-1.5 h-5 md:h-6 bg-black skew-x-[-20deg]" />
                <div className="w-1.5 h-5 md:h-6 bg-black skew-x-[-20deg]" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Track Lines Decoration */}
      <div className="absolute bottom-8 left-0 w-full opacity-10 pointer-events-none flex flex-col gap-1">
         <div className="h-[2px] w-full bg-white/50" />
         <div className="h-[2px] w-full bg-white/30" />
      </div>
    </section>
  );
}
