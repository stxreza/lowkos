"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Tentang Kami", href: "#", active: true },
  { name: "Engine Treatment", href: "#" },
  { name: "Additive", href: "#" },
  { name: "Tire Treatment", href: "#" },
  { name: "Bisnis", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-300 transform-gpu ${
        isScrolled
          ? "bg-[#050505]/95 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.22)]"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 group mt-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776516271/Lowkos_Logo_dark_xc6vns.svg" 
            alt="Lowkos Auto Clinic Logo"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center gap-8 translate-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                link.active ? "text-racing-yellow" : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
              {link.active && (
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-racing-yellow" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center lg:hidden">
          <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Empty div for balancing on desktop if needed, or social icons (Mockup shows them in footer) */}
        <div className="hidden lg:block w-32" />
      </div>
    </header>
  );
}
