"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex items-center gap-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter">
            Kenapa Harus Kami
          </h2>
          <div className="flex gap-1 h-12 w-24 opacity-20">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1">
                <div className={`h-1/2 ${i % 2 === 0 ? "bg-white" : "bg-zinc-800"}`} />
                <div className={`h-1/2 ${i % 2 !== 0 ? "bg-white" : "bg-zinc-800"}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Rating Section (Horizontal) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12"
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776454645/icon-rating_m5k18g.webp" 
                alt="Rating Lowkos"
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
              />
            </div>

            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tight">
                Rating Rata-Rata <span className="text-racing-yellow text-shadow-glow">4.8/5</span>
              </h3>
              <p className="text-lg md:text-2xl font-bold text-zinc-400 italic">
                Dipercaya Ribuan Pelanggan dari Berbagai Platform
              </p>
            </div>
          </motion.div>

          {/* Marketplace Logos (Closer & Larger) */}
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16 mt-0">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776454644/logo-shopee_rsmztj.webp" 
                alt="Shopee"
                className="h-32 md:h-52 w-auto object-contain drop-shadow-lg"
              />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776454644/logo-tokopedia_wtmogr.webp" 
                alt="Tokopedia"
                className="h-32 md:h-52 w-auto object-contain drop-shadow-lg"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
