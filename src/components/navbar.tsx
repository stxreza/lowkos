"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { PRODUCTS, type ProductCategory } from "@/lib/products";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Bisnis", href: "/bisnis" },
  { name: "Blog", href: "/blog" },
];

const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Engine Treatment",
  "Additive",
  "Tire Treatment",
];

const PRODUCTS_BY_CATEGORY: Record<ProductCategory, Array<{ name: string; href: string }>> = {
  "Engine Treatment": PRODUCTS.filter((product) => product.category === "Engine Treatment").map(
    (product) => ({
      name: product.name,
      href: `/${product.slug}`,
    })
  ),
  Additive: PRODUCTS.filter((product) => product.category === "Additive").map((product) => ({
    name: product.name,
    href: `/${product.slug}`,
  })),
  "Tire Treatment": PRODUCTS.filter((product) => product.category === "Tire Treatment").map((product) => ({
    name: product.name,
    href: `/${product.slug}`,
  })),
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
          {navLinks.slice(0, 2).map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive ? "text-racing-yellow" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-racing-yellow" />
                )}
              </Link>
            );
          })}

          {PRODUCT_CATEGORIES.map((category) => (
            <div key={category} className="group relative">
              <button
                type="button"
                className="relative inline-flex items-center gap-1 py-2 text-[11px] font-bold uppercase tracking-widest text-white/70 transition-all duration-300 hover:text-white"
                aria-haspopup="menu"
                aria-label={`Menu ${category}`}
              >
                <span>{category}</span>
                <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              <div className="invisible absolute left-1/2 top-full z-[130] mt-3 w-72 -translate-x-1/2 rounded-xl border border-white/10 bg-[#070707]/95 p-3 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="flex flex-col gap-1">
                  {PRODUCTS_BY_CATEGORY[category].map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="rounded-md px-2 py-2 text-xs font-semibold text-white/80 transition-colors duration-200 hover:bg-white/8 hover:text-racing-yellow"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {navLinks.slice(2).map((link) => {
            const isActive = link.href !== "#" && pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive ? "text-racing-yellow" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-racing-yellow" />
                )}
              </Link>
            );
          })}
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
