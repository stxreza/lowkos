"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  subHeading?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ title, subtitle, subHeading, align = "left", className = "" }: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const justifyClass = align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 md:mb-16 ${className}`}>
      {subHeading && (
        <div className={`mb-3 flex items-center ${justifyClass} gap-3`}>
          <span className="h-[3px] w-10 bg-racing-yellow skew-x-[-20deg]" />
          <span className="text-sm font-black uppercase tracking-[0.2em] text-white/60">
            {subHeading}
          </span>
          {align === "center" && (
            <span className="h-[3px] w-10 bg-racing-yellow skew-x-[-20deg]" />
          )}
        </div>
      )}
      
      <div className={`flex ${alignmentClass}`}>
        <motion.h2 
          initial={{ opacity: 0, x: align === "center" ? 0 : -30, y: align === "center" ? 30 : 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter"
        >
          {title}
        </motion.h2>
      </div>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-4 text-zinc-400 font-medium md:text-lg max-w-2xl ${
            align === 'left' ? '' : 'mx-auto'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
