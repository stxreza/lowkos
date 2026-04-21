"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<ProductCategory | null>(null);
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileCategory(null);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

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
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-zinc-800"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Empty div for balancing on desktop if needed, or social icons (Mockup shows them in footer) */}
        <div className="hidden lg:block w-32" />
      </div>

      <div
        className={`fixed inset-0 z-[140] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/75 backdrop-blur-[1px]"
          aria-label="Tutup menu"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <aside
          id="mobile-nav-menu"
          className={`absolute left-0 top-0 h-full w-[80%] max-w-[320px] border-r border-white/10 bg-black px-4 pb-6 pt-8 shadow-[16px_0_40px_rgba(0,0,0,0.55)] transition-transform duration-300 sm:w-[72%] ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-label="Menu mobile"
        >
          <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
            <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/dxgoshyei/image/upload/v1776516271/Lowkos_Logo_dark_xc6vns.svg"
                alt="Lowkos Auto Clinic Logo"
                className="h-8 w-auto"
              />
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Tutup menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-2 rounded-t-xl border border-white/10 border-b-0 bg-[#101010] p-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block rounded-md border-l-4 px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "border-racing-yellow bg-white/12 text-racing-yellow"
                      : "border-transparent text-white/90 hover:bg-white/8"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="space-y-2 rounded-b-xl border border-white/10 bg-[#101010] p-2 pt-3">
            {PRODUCT_CATEGORIES.map((category) => {
              const isOpen = openMobileCategory === category;
              const contentId = `mobile-category-${category.toLowerCase().replace(/\s+/g, "-")}`;

              return (
                <div key={category} className="rounded-lg border border-white/10 bg-[#161616]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-3 py-2.5 text-left"
                    onClick={() =>
                      setOpenMobileCategory((prev) => (prev === category ? null : category))
                    }
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                  >
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/80">
                      {category}
                    </span>
                    <ChevronDown
                      className={`size-4 text-white/70 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div id={contentId} className="space-y-1 px-2 pb-2">
                      {PRODUCTS_BY_CATEGORY[category].map((product) => {
                        const isProductActive =
                          pathname === product.href || pathname.startsWith(`${product.href}/`);

                        return (
                          <Link
                            key={product.href}
                            href={product.href}
                            className={`block rounded-md border-l-4 px-3 py-2 text-sm transition-colors duration-200 ${
                              isProductActive
                                ? "border-racing-yellow bg-white/12 font-semibold text-racing-yellow"
                                : "border-transparent text-white/85 hover:bg-white/8 hover:text-racing-yellow"
                            }`}
                          >
                            {product.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </header>
  );
}
