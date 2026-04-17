"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-start gap-4 mb-20 ${className}`}>
      <div className="flex items-center gap-6">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter"
        >
          {title}
        </motion.h2>
        
        {/* Checkered Flag Decoration */}
        <div className="flex h-12 w-28 opacity-15 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-1 flex flex-col">
              <div className={`flex-1 ${i % 2 === 0 ? "bg-white" : "bg-transparent"}`} />
              <div className={`flex-1 ${i % 2 !== 0 ? "bg-white" : "bg-transparent"}`} />
            </div>
          ))}
        </div>
      </div>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 font-bold italic text-xl uppercase tracking-widest border-l-4 border-racing-yellow pl-4"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
