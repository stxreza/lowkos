"use client"

import { motion } from "framer-motion"



const products = [
  {
    category: "Engine Treatment",
    name: "Injector Cleaner",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Injector-Cleaner-60-ML_xqvvfm.webp",
    accentClassName: "bg-racing-red",
    summary: "Pembersih injektor dan ruang bakar untuk menjaga efisiensi BBM serta performa mesin.",
    highlights: ["Injector lebih bersih", "Emisi dan knocking berkurang"],
    sizes: "60ml, 100ml, 150ml, 275ml, 330ml",
  },
  {
    category: "Engine Treatment",
    name: "Cairan Infus Injeksi",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Cairan-Infus-Injeksi-5O-ML_yxinjd.webp",
    accentClassName: "bg-racing-red",
    summary: "Cairan servis injeksi untuk bengkel dengan alat infus, membersihkan injector dan combustion chamber.",
    highlights: ["Bersihkan injector", "Performa mesin naik"],
    sizes: "50ml, 100ml, 150ml, 330ml, 500ml, 1000ml",
  },
  {
    category: "Engine Treatment",
    name: "Engine Flush",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Engine-Flush-50-ML_gptyf0.webp",
    accentClassName: "bg-racing-red",
    summary: "Pembersih lumpur dan kerak di bak oli mesin sebelum penggantian oli.",
    highlights: ["Bak oli lebih bersih", "Usia komponen lebih panjang"],
    sizes: "50ml, 250ml",
  },
  {
    category: "Engine Treatment",
    name: "Carbon Cleaner Drops",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458083/Carbon-Drops-12-ML_xonmpv.webp",
    accentClassName: "bg-racing-red",
    summary: "Tetes pembersih karbon praktis untuk motor dan mobil tanpa bongkar mesin.",
    highlights: ["Ruang bakar lebih bersih", "Ideal untuk bengkel & mekanik"],
    sizes: "12ml, 33ml",
  },
  {
    category: "Additive",
    name: "Fuel Additive",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Fuel-Additive-12-ML_gwq9tq.webp",
    accentClassName: "bg-racing-yellow",
    summary: "Aditif BBM berbasis minyak atsiri untuk membantu oktan, performa, dan efisiensi.",
    highlights: ["Naikkan RON/Cetane", "Torsi dan tenaga lebih baik"],
    sizes: "12ml, 33ml, 60ml, 100ml, 1000ml",
  },
  {
    category: "Additive",
    name: "Octane Booster",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Octan-Booster-500-ML_we16cx.webp",
    accentClassName: "bg-racing-yellow",
    summary: "Formula peningkat oktan untuk tenaga, torsi, dan respons mesin harian maupun race.",
    highlights: ["Tarikan lebih enteng", "Bisa untuk harian atau drag"],
    sizes: "100ml, 500ml, 1000ml",
  },
  {
    category: "Additive",
    name: "Oil Additive",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458083/Oil-Additive-40-ML_pmylkm.webp",
    accentClassName: "bg-racing-yellow",
    summary: "Aditif oli untuk perlindungan ekstra, mengurangi gesekan, dan memperpanjang umur mesin.",
    highlights: ["Gesekan berkurang", "Perlindungan ekstra pada oli"],
    sizes: "40ml, 150ml",
  },
  {
    category: "Additive",
    name: "Gearbox Additive",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776496385/Gearbox-Additive-75-ML-1024x1024_ct84wm.webp",
    accentClassName: "bg-racing-yellow",
    summary: "Aditif gearbox untuk perpindahan gigi lebih halus, gesekan lebih rendah, dan umur pakai lebih panjang.",
    highlights: ["Shift lebih halus", "Lindungi gear dan komponen"],
    sizes: "75ml",
  },
  {
    category: "Tire Treatment",
    name: "Tire Sealant",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776458084/Tire-Sealant-350-ML_qozwjy.webp",
    accentClassName: "bg-racing-red",
    summary: "Cairan anti bocor ban tubeless yang cepat menutup kebocoran kecil saat berkendara.",
    highlights: ["Cepat tutup kebocoran", "Tidak bikin velg berkarat"],
    sizes: "350ml, 500ml, 1000ml, 5000ml",
  },
  {
    category: "Tire Treatment",
    name: "Tire Sealant Gold",
    image: "https://res.cloudinary.com/dxgoshyei/image/upload/v1776496385/Tire-Sealant-Gold-Edition-350-ML_kl9mbk.webp",
    accentClassName: "bg-racing-yellow",
    summary: "Gold Edition dengan sealing cepat untuk menjaga performa dan keamanan ban.",
    highlights: ["Teknologi sealing cepat", "Ideal untuk motor dan mobil"],
    sizes: "350ml",
  },
]

import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ProductDropCard } from "@/components/ui/product-drop-card"
import SectionHeader from "./section-header"

export default function Products() {
  const [key, setKey] = useState("all")

  const filteredProducts = products.filter(p => key === "all" || p.category === key)

  return (
    <section className="w-full py-24 bg-black relative overflow-hidden" id="products">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-[1400px]">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          
          <div className="flex flex-col gap-5 md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
            <SectionHeader 
              subHeading="Racing Formula"
              title="Produk Lowkos"
              subtitle="Engine treatment, additive, dan tire treatment dengan formula yang dibuat untuk perawatan harian sampai kebutuhan performa lebih tinggi."
              align="left"
              className="max-w-2xl !mb-0" 
            />
            
            <div className="mt-6 md:mt-0 shrink-0">
              <ToggleGroup
                  type="single"
                  className="bg-zinc-900/50 rounded-xl border border-white/10 p-1.5 flex-wrap md:flex-nowrap justify-start"
                  value={key}
                  onValueChange={(e) => {
                    if (e) setKey(e)
                  }}>
                  <ToggleGroupItem value="all" className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg h-auto sm:px-4 shrink-0 transition-all data-[state=on]:bg-white data-[state=on]:text-black text-white/60 hover:text-white">
                      Semua
                  </ToggleGroupItem>
                  <ToggleGroupItem value="Engine Treatment" className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg h-auto sm:px-4 shrink-0 transition-all data-[state=on]:bg-racing-red data-[state=on]:text-white text-white/60 hover:text-white">
                      Engine
                  </ToggleGroupItem>
                  <ToggleGroupItem value="Additive" className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg h-auto sm:px-4 shrink-0 transition-all data-[state=on]:bg-racing-yellow data-[state=on]:text-black text-white/60 hover:text-white">
                      Additive
                  </ToggleGroupItem>
                  <ToggleGroupItem value="Tire Treatment" className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg h-auto sm:px-4 shrink-0 transition-all data-[state=on]:bg-zinc-700 data-[state=on]:text-white text-white/60 hover:text-white">
                      Tire
                  </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <ProductDropCard
            title={key === "all" ? "Semua Produk" : key}
            subtitle={`Koleksi ${key === "all" ? "lengkap" : key.toLowerCase()} formula racing Lowkos.`}
            items={filteredProducts.map((p) => ({
              category: p.category,
              name: p.name,
              summary: p.summary,
              sizes: p.sizes,
              imageSrc: p.image,
              accentClassName: p.accentClassName,
            }))}
          />

        </motion.div>
      </div>
    </section>
  )
}


