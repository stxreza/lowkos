"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import SectionHeader from "./section-header"

// Sample testimonial data
const TESTIMONIALS = [
  {
    name: "Andi Wijaya",
    role: "Pembalap Drag Lokal",
    content: "Sejak pakai Lowkos Engine Treatment, akselerasi motor saya makin responsif. Panas mesin juga jauh lebih terjaga saat digeber di lintasan.",
    rating: 5,
    avatar: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776513212/6c15c1c9a3ec060ed194b0192e81f3cc_nrkugg.webp",
  },
  {
    name: "Budi Santoso",
    role: "Komunitas Touring",
    content: "Sering touring jarak jauh bikin oli cepat menguap. Tambahan Additive Lowkos bikin tarikan mesin tetap enteng meski sudah ratusan kilometer.",
    rating: 5,
    avatar: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776513212/Foto-Cowok-Ganteng-Buat-Foto-Profil-6_vpvy4b.webp",
  },
  {
    name: "Reza Pratama",
    role: "Daily Commuter",
    content: "Produk yang sangat worth it! Performa motor buat harian kerasa seperti motor baru terus. Irit bensin juga makin terasa karena pembakaran sempurna.",
    rating: 5,
    avatar: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776513212/alone-boy-6143295_640_rxm414.webp",
  },
  {
    name: "Dimas Anggara",
    role: "Mekanik Bengkel",
    content: "Sebagai mekanik, saya merekomendasikan produk Lowkos ke pelanggan. Hasilnya terbukti dari kerak mesin yang berkurang drastis saat servis.",
    rating: 5,
    avatar: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776513212/6331a65fe29223480c63a9504d55df3b_cc955n.webp",
  },
  {
    name: "Surya Kencana",
    role: "Ojek Online",
    content: "Tiap hari keliling kota bikin motor gampang rewel. Pake Lowkos jadi jarang mampir bengkel. Mesin halus, tarikan enteng, mantap pokoknya!",
    rating: 4,
    avatar: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776513212/images_ioc2kp.webp",
  },
]

// Duplicate the items so the marquee can loop seamlessly
const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 bg-black">
      {/* Background styling for premium/racing feel */}
      <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none transform-gpu"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-racing-red to-transparent opacity-50 transform-gpu"></div>
      
      {/* Red racing glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-racing-red/10 blur-[80px] rounded-full pointer-events-none transform-gpu will-change-transform"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 mb-8">
        <SectionHeader 
          subHeading="Ulasan Pelanggan"
          title={<>Dipercaya Oleh <span className="text-racing-red">Riders</span></>}
          subtitle="Kualitas juara yang telah dibuktikan di jalanan maupun lintasan. Dengarkan apa kata mereka yang sudah merasakan ketangguhan Lowkos."
          align="center"
        />
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex z-10 py-4">
        {/* Left/Right Fade */}
        <div className="absolute left-0 top-0 bottom-0 z-20 w-16 md:w-40 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 z-20 w-16 md:w-40 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

        <motion.div
          className="flex w-max gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            duration: 40,
          }}
        >
          {MARQUEE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex w-[320px] md:w-[400px] shrink-0 flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-[#151515] to-[#0a0a0a] p-6 text-white border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:border-racing-red/50 hover:shadow-[0_8px_30px_rgba(234,42,51,0.15)]"
            >
              {/* Subtle grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-20"></div>
              
              {/* Racing accent line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-racing-red via-racing-yellow to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/10 group-hover:border-racing-red/50 transition-colors">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.avatar} alt={`${item.name} Lowkos Auto Clinic`} className="object-cover h-full w-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white leading-none">{item.name}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{item.role}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-white/10 rotate-180 transition-colors group-hover:text-racing-red/20" />
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < item.rating ? "fill-racing-yellow text-racing-yellow" : "fill-white/10 text-white/10"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  &quot;{item.content}&quot;
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
