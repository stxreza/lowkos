"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black flex items-end pb-16 md:items-center md:pb-0">
      
      {/* Background Hero Images (Responsive) */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Desktop Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776454645/hero-image-desktop_xqgrn0.webp" 
          alt="Lowkos Auto Clinic Desktop"
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-70"
        />
        {/* Mobile Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776454645/hero-image-mobile_c273ex.webp" 
          alt="Lowkos Auto Clinic Mobile"
          className="md:hidden absolute inset-0 w-full h-full object-cover opacity-70"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
      </div>

      {/* Checkered Flag Pattern - Corners Decoration */}
      <div className="absolute top-0 left-0 w-32 md:w-48 h-32 md:h-48 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)", backgroundSize: "40px 40px", backgroundPosition: "0 0, 20px 20px" }} />
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black italic uppercase leading-[0.85] tracking-tighter"
          >
            <span className="text-racing-yellow">CLEAN </span>
            <span className="text-white">AND</span>
            <br />
            <span className="text-racing-yellow">TREAT </span>
            <span className="text-white">YOUR</span>
            <br />
            <span className="text-white">ENGINE</span>
          </motion.h1>

          {/* Yellow Banner Badge */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 relative inline-flex items-center"
          >
            <div className="bg-racing-yellow px-6 py-2 md:px-10 md:py-3 skew-x-[-15deg] shadow-lg flex items-center gap-4">
              <span className="text-black font-black italic text-sm md:text-xl uppercase tracking-wider skew-x-[15deg]">
                Inovasi Performa, Keahlian Kami
              </span>
              {/* Racing Stripes */}
              <div className="flex gap-1 skew-x-[15deg] ml-4">
                <div className="w-1.5 h-6 bg-black skew-x-[-20deg]" />
                <div className="w-1.5 h-6 bg-black skew-x-[-20deg]" />
                <div className="w-1.5 h-6 bg-black skew-x-[-20deg]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Track Lines Decoration */}
      <div className="absolute bottom-10 left-0 w-full opacity-10 pointer-events-none flex flex-col gap-1">
         <div className="h-[2.5px] w-full bg-white/50" />
         <div className="h-[2.5px] w-full bg-white/30" />
      </div>
    </section>
  );
}
