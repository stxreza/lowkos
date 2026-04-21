"use client"

import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { MARKETPLACE_LINKS } from "@/lib/external-links"

export default function Cta() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Decorative background for premium racing feel */}
      <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none"></div>
      
      {/* Glow Effects (Optimized for performance) */}
      <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-racing-yellow/5 blur-[80px] rounded-full pointer-events-none transform-gpu"></div>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-racing-red/5 blur-[80px] rounded-full pointer-events-none transform-gpu"></div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full flex flex-col space-y-8 lg:space-y-8"
          >
            <div>
              <SectionHeader 
                subHeading="Lowkos Auto Clinic"
                title={<>Perawatan <span className="text-racing-yellow">Terbaik</span> Untuk Kendaraan Anda</>}
                subtitle="Semua produk Lowkos Auto Clinic terbuat dari formula hasil riset untuk performa dan ketahanan mesin terbaik. Kunjungi toko kami di:"
                align="left"
                className="!mb-0" // override bottom margin
              />
            </div>

            {/* Gambar Brosur untuk Mobile (Muncul di bawah teks, sembunyi di desktop) */}
            <div className="block lg:hidden w-full relative max-w-md mx-auto my-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-zinc-900/50 p-2 transform-gpu">
                <div className="rounded-xl overflow-hidden relative bg-zinc-900">
                  <div className="absolute inset-0 bg-racing-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-racing-yellow/20 rotate-45 blur-xl z-20 pointer-events-none transition-colors duration-300 transform-gpu"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776519230/Brosur_Lowkos_oqvhzw.webp" 
                    alt="Brosur Produk Lowkos Auto Clinic"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03] rounded-xl relative z-0 will-change-transform transform-gpu"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Marketplace Logos */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 pt-2">
              <motion.a
                href={MARKETPLACE_LINKS.shopee.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative cursor-pointer block bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 hover:border-racing-yellow/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] will-change-transform transform-gpu"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={MARKETPLACE_LINKS.shopee.logo}
                  alt={MARKETPLACE_LINKS.shopee.alt}
                  className="h-14 md:h-16 w-auto object-contain"
                  loading="lazy"
                />
              </motion.a>

              <motion.a
                href={MARKETPLACE_LINKS.tokopedia.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative cursor-pointer block bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10 hover:border-racing-yellow/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] will-change-transform transform-gpu"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={MARKETPLACE_LINKS.tokopedia.logo}
                  alt={MARKETPLACE_LINKS.tokopedia.alt}
                  className="h-14 md:h-16 w-auto object-contain"
                  loading="lazy"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Image (Sembunyi di Mobile, Muncul di Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block flex-1 w-full relative max-w-md mx-auto lg:max-w-lg lg:ml-auto"
          >
            {/* Decorative border frame with skew */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-zinc-900/50 p-2 transform-gpu">
              <div className="rounded-xl overflow-hidden relative bg-zinc-900">
                {/* Subtle glow behind the image on hover */}
                <div className="absolute inset-0 bg-racing-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                
                {/* Add racing stripes over the corner - Optimized */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-racing-yellow/20 rotate-45 blur-xl z-20 pointer-events-none transition-colors duration-300 transform-gpu"></div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776519230/Brosur_Lowkos_oqvhzw.webp" 
                  alt="Brosur Produk Lowkos Auto Clinic"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03] rounded-xl relative z-0 will-change-transform transform-gpu"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
