"use client"

import * as React from "react"
import { motion } from "framer-motion"
import SectionHeader from "./section-header"
import { MARKETPLACE_LINKS } from "@/lib/external-links"

// Icon components using SVG
const IndonesiaIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#DC2626"/>
    <rect x="2" y="12" width="20" height="8" fill="#FFFFFF"/>
  </svg>
)

const AmericaIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#FFFFFF"/>
    <rect x="2" y="4" width="20" height="5.33" fill="#3C3B6E"/>
    <rect x="2" y="9.33" width="20" height="5.33" fill="#B22234"/>
    <rect x="2" y="14.67" width="20" height="5.33" fill="#FFFFFF"/>
    <rect x="2" y="4" width="8" height="16" fill="#3C3B6E"/>
    <circle cx="6" cy="8" r="0.5" fill="#FFFFFF"/>
    <circle cx="6" cy="10" r="0.5" fill="#FFFFFF"/>
    <circle cx="6" cy="12" r="0.5" fill="#FFFFFF"/>
    <circle cx="6" cy="14" r="0.5" fill="#FFFFFF"/>
    <circle cx="6" cy="16" r="0.5" fill="#FFFFFF"/>
  </svg>
)

const CareIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#DC2626"/>
  </svg>
)

const EcoIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#10B981"/>
    <circle cx="12" cy="12" r="8" fill="none" stroke="#10B981" strokeWidth="1"/>
  </svg>
)

const InnovationIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ExportIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="7.5,9.5 12,12.5 16.5,9.5" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="12.5" x2="12" y2="21.5" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const PriceIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const advantages = [
  {
    title: "Produk Indonesia Kualitas Amerika",
    description: "Dibuat di Indonesia dengan standar kualitas Amerika yang terpercaya dunia.",
    icon: <><IndonesiaIcon /><AmericaIcon /></>,
    color: "from-red-500 to-red-700",
    delay: 0.1,
  },
  {
    title: "Lowkos Auto Clinic Care",
    description: "Produk perawatan kendaraan lengkap",
    icon: <CareIcon />,
    color: "from-yellow-400 to-yellow-600",
    delay: 0.2,
  },
  {
    title: "Eco Friendly",
    description: "Formula ramah lingkungan yang aman untuk mesin dan bumi.",
    icon: <EcoIcon />,
    color: "from-green-400 to-green-600",
    delay: 0.3,
  },
  {
    title: "Inovasi Terbaru",
    description: "Teknologi terdepan dalam dunia perawatan otomotif modern.",
    icon: <InnovationIcon />,
    color: "from-blue-400 to-blue-600",
    delay: 0.4,
  },
  {
    title: "Kualitas Ekspor",
    description: "Standar ekspor internasional yang diakui di berbagai negara.",
    icon: <ExportIcon />,
    color: "from-purple-400 to-purple-600",
    delay: 0.5,
  },
  {
    title: "Harga Terbaik",
    description: "Kualitas premium dengan harga yang kompetitif dan terjangkau.",
    icon: <PriceIcon />,
    color: "from-orange-400 to-orange-600",
    delay: 0.6,
  },
]

export default function Advantages() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-carbon opacity-20 pointer-events-none transform-gpu"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-racing-yellow to-transparent opacity-50 transform-gpu"></div>

      {/* Racing Glow Effects */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-racing-red/5 blur-[80px] rounded-full pointer-events-none transform-gpu will-change-transform"></div>
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-racing-yellow/5 blur-[80px] rounded-full pointer-events-none transform-gpu will-change-transform"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <SectionHeader 
          title={<>Kenapa harus <span className="text-racing-yellow">Lowkos</span></>}
          subtitle="Kombinasi sempurna antara inovasi lokal dengan standar kualitas internasional untuk performa maksimal kendaraan Anda."
          align="center"
        />

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: advantage.delay }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 p-8 transition-all duration-500 hover:border-racing-yellow/30 hover:shadow-[0_0_50px_rgba(255,215,0,0.1)]">
                {/* Racing Stripes Background */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 left-4 w-16 h-1 bg-racing-yellow -skew-x-[30deg]"></div>
                  <div className="absolute top-8 left-8 w-12 h-1 bg-racing-yellow -skew-x-[30deg]"></div>
                  <div className="absolute bottom-8 right-8 w-20 h-1 bg-racing-yellow -skew-x-[30deg]"></div>
                </div>

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5 rounded-2xl`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 mb-6 group-hover:border-white/20 transition-colors"
                  >
                    <div className="flex gap-1">
                      {advantage.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-black italic uppercase tracking-tight text-white mb-4 group-hover:text-racing-yellow transition-colors">
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed font-medium">
                    {advantage.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-racing-yellow/20 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-racing-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-racing-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-racing-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-racing-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating and Marketplaces Section (Merged from WhyUs) */}
        <div className="mt-24 pt-16 border-t border-white/10 flex flex-col items-center text-center">
          {/* Rating Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12"
          >
            <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776454645/icon-rating_m5k18g.webp" 
                alt="Rating Lowkos Auto Clinic"
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

          {/* Marketplace Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-16">
            <motion.a
              href={MARKETPLACE_LINKS.shopee.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={MARKETPLACE_LINKS.shopee.logo}
                alt={MARKETPLACE_LINKS.shopee.alt}
                className="h-16 md:h-28 w-auto object-contain drop-shadow-lg"
              />
            </motion.a>

            <motion.a
              href={MARKETPLACE_LINKS.tokopedia.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={MARKETPLACE_LINKS.tokopedia.logo}
                alt={MARKETPLACE_LINKS.tokopedia.alt}
                className="h-16 md:h-28 w-auto object-contain drop-shadow-lg"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
