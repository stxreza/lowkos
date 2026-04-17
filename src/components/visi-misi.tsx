"use client";

import { motion } from "framer-motion";

const content = [
  {
    title: "Visi",
    color: "#ea2a33", // racing-red
    text: "Menjadi pemimpin dalam solusi perawatan mesin otomotif berkinerja tinggi di Indonesia.",
    delay: 0.1
  },
  {
    title: "Misi",
    color: "#FFD700", // racing-yellow
    text: "Menyediakan produk inovatif, ramah lingkungan, dan terjangkau untuk meningkatkan performa dan umur mesin kendaraan.",
    delay: 0.3
  }
];

export default function VisiMisi() {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex items-center gap-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter">
            Visi & Misi
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

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {content.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.6 }}
              className="relative group"
            >
              {/* Header Tab */}
              <div 
                className="relative z-20 h-16 w-3/4 md:w-2/3 flex items-center px-8 skew-x-[-15deg]"
                style={{ backgroundColor: item.color }}
              >
                <div className="flex items-center gap-4 skew-x-[15deg]">
                  <h3 className="text-3xl md:text-4xl font-black italic text-white uppercase tracking-tighter">
                    {item.title}
                  </h3>
                  {/* Stripes inside header */}
                  <div className="flex gap-1">
                    <div className="w-1.5 h-6 bg-white/30" />
                    <div className="w-1.5 h-6 bg-white/30" />
                    <div className="w-1.5 h-6 bg-white/30" />
                  </div>
                </div>
                
                {/* Floating Checkered Decoration at top-right of panel */}
                <div className="absolute top-0 right-[-60px] w-24 h-12 opacity-30 flex flex-col">
                  <div className="flex h-1/2">
                    {[...Array(6)].map((_, i) => <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-white" : "bg-transparent"}`} />)}
                  </div>
                  <div className="flex h-1/2">
                    {[...Array(6)].map((_, i) => <div key={i} className={`flex-1 ${i % 2 !== 0 ? "bg-white" : "bg-transparent"}`} />)}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 bg-white p-8 md:p-12 -mt-4 skew-x-[-5deg] rounded-br-[40px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-black font-bold text-lg md:text-xl leading-relaxed skew-x-[5deg]">
                  {item.text}
                </p>
                
                {/* Accent at bottom */}
                <div 
                  className="absolute bottom-4 right-4 w-12 h-12 opacity-80"
                  style={{ 
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                    backgroundColor: item.color 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
