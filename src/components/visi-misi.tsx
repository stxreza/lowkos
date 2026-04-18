"use client";

import { motion } from "framer-motion";
import SectionHeader from "./section-header";

type CheckeredPatternProps = {
  className?: string;
};

type SlantedCardProps = {
  type: "Visi" | "Misi";
  title: string;
  description: string;
  badgeColor: string;
  badgeTextColor: string;
  foldColor: string;
  accentColor: string;
  delay: number;
};

const CheckeredPattern = ({ className = "" }: CheckeredPatternProps) => (
  <svg
    className={`fill-current ${className}`}
    width="120"
    height="60"
    viewBox="0 0 120 60"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="0" y="0" width="15" height="15" opacity="0.1" />
    <rect x="30" y="0" width="15" height="15" opacity="0.3" />
    <rect x="60" y="0" width="15" height="15" opacity="0.6" />
    <rect x="90" y="0" width="15" height="15" opacity="0.9" />

    <rect x="15" y="15" width="15" height="15" opacity="0.2" />
    <rect x="45" y="15" width="15" height="15" opacity="0.4" />
    <rect x="75" y="15" width="15" height="15" opacity="0.7" />
    <rect x="105" y="15" width="15" height="15" opacity="1" />

    <rect x="30" y="30" width="15" height="15" opacity="0.3" />
    <rect x="60" y="30" width="15" height="15" opacity="0.5" />
    <rect x="90" y="30" width="15" height="15" opacity="0.8" />
  </svg>
);

function SlantedCard({
  type,
  title,
  description,
  badgeColor,
  badgeTextColor,
  foldColor,
  accentColor,
  delay,
}: SlantedCardProps) {
  const stripeClasses =
    badgeTextColor === "text-white"
      ? ["bg-white/40", "bg-white/80"]
      : ["bg-black/20", "bg-black/80"];

  return (
    <motion.div
      initial={{ opacity: 0, x: type === "Visi" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 150, damping: 15, delay }}
      className="relative mx-auto w-full max-w-[34rem] px-1 sm:px-0"
    >
      <div className="relative h-full min-h-[214px] -skew-x-[8deg] overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] sm:min-h-[224px] sm:-skew-x-[12deg]">
        <div className="absolute inset-0 skew-x-[8deg] pointer-events-none sm:skew-x-[12deg]">
          <div className="absolute right-0 top-0 translate-x-2 -translate-y-1 text-gray-200 opacity-50 sm:translate-x-4 sm:-translate-y-2 sm:opacity-60">
            <CheckeredPattern className="h-14 w-28 sm:h-20 sm:w-40" />
          </div>

          <div className="absolute -bottom-1 -right-2 flex items-end gap-1 opacity-95 sm:-bottom-2 sm:-right-4 sm:gap-1.5">
            <div className={`h-12 w-2 origin-bottom -skew-x-[24deg] sm:h-16 sm:w-3 sm:-skew-x-[30deg] ${accentColor}`} />
            <div className={`h-18 w-14 origin-bottom -skew-x-[24deg] sm:h-24 sm:w-20 sm:-skew-x-[30deg] ${accentColor}`} />
          </div>
        </div>

        <div className="relative z-10 flex h-full skew-x-[8deg] flex-col justify-center px-6 pb-8 pt-16 sm:skew-x-[12deg] sm:px-10 sm:pb-9 sm:pt-20">
          <p className="text-[0.92rem] font-semibold leading-relaxed text-gray-800 drop-shadow-sm sm:text-[0.98rem] md:text-[1.02rem]">
            {description}
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: delay + 0.3 }}
        className="absolute left-1 top-4 z-20 drop-shadow-xl sm:-left-4 sm:top-6"
      >
        <div
          className="absolute -bottom-2 left-0 h-0 w-0"
          style={{
            borderTop: `8px solid ${foldColor}`,
            borderLeft: "16px solid transparent",
          }}
        />

        <div className={`relative flex -skew-x-[8deg] items-center ${badgeColor} py-1.5 pl-5 pr-6 shadow-lg sm:-skew-x-[12deg] sm:py-2 sm:pl-8 sm:pr-10`}>
          <h3 className={`mr-4 skew-x-[8deg] text-[1.65rem] font-black italic tracking-wide ${badgeTextColor} sm:mr-6 sm:skew-x-[12deg] sm:text-3xl`}>
            {title}
          </h3>

          <div className="flex gap-1 skew-x-[8deg] sm:gap-1.5 sm:skew-x-[12deg]">
            <div className={`h-6 w-1 -skew-x-[8deg] ${stripeClasses[0]} sm:h-7 sm:w-1.5 sm:-skew-x-[12deg]`} />
            <div className={`h-6 w-1 -skew-x-[8deg] ${stripeClasses[1]} sm:h-7 sm:w-1.5 sm:-skew-x-[12deg]`} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VisiMisi() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-lowkos-dark py-20 font-sans">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-10 top-10 hidden text-white/5 md:block"
      >
        <CheckeredPattern className="h-32 w-64" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <SectionHeader 
          subHeading="Tujuan Utama" 
          title="Visi & Misi" 
          align="center"
          className="mb-12 gap-0" 
        />

        <div className="mx-auto grid max-w-[70rem] grid-cols-1 gap-5 md:auto-rows-fr md:grid-cols-2 md:gap-5 lg:gap-5">
          <SlantedCard
            type="Visi"
            title="Visi"
            description="Menjadi pemimpin dalam solusi perawatan mesin otomotif berkinerja tinggi di Indonesia."
            badgeColor="bg-[#E60000]"
            badgeTextColor="text-white"
            foldColor="#8B0000"
            accentColor="bg-[#E60000]"
            delay={0.1}
          />

          <SlantedCard
            type="Misi"
            title="Misi"
            description="Menyediakan produk inovatif, ramah lingkungan, dan terjangkau untuk meningkatkan performa dan umur mesin kendaraan."
            badgeColor="bg-[#FFD700]"
            badgeTextColor="text-gray-900"
            foldColor="#B8860B"
            accentColor="bg-[#FFD700]"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
