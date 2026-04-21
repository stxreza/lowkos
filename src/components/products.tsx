"use client"

import { motion } from "framer-motion"

import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ProductDropCard } from "@/components/ui/product-drop-card"
import SectionHeader from "./section-header"
import { PRODUCTS } from "@/lib/products"

export default function Products() {
  const [key, setKey] = useState("all")

  const filteredProducts = PRODUCTS.filter((p) => key === "all" || p.category === key)

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
              sizes: p.availableSizes.join(", "),
              imageSrc: p.image,
              accentClassName: p.accentClassName,
              href: `/${p.slug}`,
            }))}
          />

        </motion.div>
      </div>
    </section>
  )
}


