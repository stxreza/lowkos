"use client";

import { motion } from "framer-motion";
import SectionHeader from "./section-header";

const milestones = [
  { year: "2019", text: "Launching Produk Fuel Additive Pertama", position: "top", color: "yellow" },
  { year: "2020", text: "Pengembangan Produk Octane Booster ", position: "bottom", color: "red" },
  { year: "2021", text: "Ekspansi Jaringan Distribusi", position: "top", color: "yellow" },
  { year: "2023", text: "Pengembangan Produk Engine Treatment", position: "bottom", color: "red" },
  { year: "2024", text: "Launching Produk Tire Treatment", position: "top", color: "yellow" },
  { year: "2025", text: "Membuka Peluang Bisnis Maklon", position: "bottom", color: "red" },
];

function SmallCheckeredFlag() {
  return (
    <div className="flex -skew-x-[15deg] w-8 h-4 opacity-50 mt-1 shrink-0">
      <div className="grid grid-cols-4 grid-rows-2 w-full h-full">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={(i + Math.floor(i / 4)) % 2 === 0 ? "bg-white" : "bg-transparent"} />
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="sejarah" className="py-20 bg-lowkos-dark overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader 
          subHeading="Perjalanan Lowkos" 
          title="Sejarah Kami" 
          align="center"
          className="mb-12 gap-0" 
        />

        {/* Desktop Timeline */}
        <div className="hidden md:block relative mt-32 mb-20">
          <div className="flex w-full relative z-10">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex-1 flex flex-col items-center"
              >
                {/* Arrow head indicator */}
                <div 
                  className={`relative z-10 flex items-center justify-center font-bold px-6 py-2 italic heading-font text-lg w-[110%] -ml-[5%]
                    ${item.color === 'yellow' ? 'bg-lowkos-yellow text-black' : 'bg-lowkos-red text-white'}
                    ${index === 0 ? 'clip-arrow-first' : 'clip-arrow'}
                  `}
                >
                  {item.year}
                </div>

                {/* Content */}
                <div className={`absolute w-56 text-sm text-gray-300 ${item.position === 'top' ? 'bottom-full mb-8' : 'top-full mt-8'}`}>
                  <div className="flex items-start gap-3">
                    <SmallCheckeredFlag />
                    <div>
                      <span className={`block font-bold text-xl mb-1 ${item.color === 'yellow' ? 'text-lowkos-yellow' : 'text-lowkos-red'}`}>
                        {item.year}
                      </span>
                      {item.text}
                    </div>
                  </div>
                </div>
                
                {/* Vertical line connection */}
                <div className={`absolute w-0.5 bg-gray-500/30 ${item.position === 'top' ? 'bottom-full h-8' : 'top-full h-8'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-lowkos-dark shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow
                 ${item.color === 'yellow' ? 'bg-lowkos-yellow' : 'bg-lowkos-red'}
              `}></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex gap-2 items-center mb-1">
                  <SmallCheckeredFlag />
                  <div className={`font-bold italic heading-font text-xl ${item.color === 'yellow' ? 'text-lowkos-yellow' : 'text-lowkos-red'}`}>
                    {item.year}
                  </div>
                </div>
                <div className="text-gray-300 text-sm">{item.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
