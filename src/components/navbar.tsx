import Link from "next/link";
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
  return (
    <header className="fixed top-0 z-[100] w-full bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-0 group">
          <span className="text-2xl font-black italic tracking-tighter leading-none">
            <span className="text-white">LOW</span>
            <span className="text-racing-yellow">KOS</span>
          </span>
          <span className="text-[8px] uppercase font-bold text-racing-yellow tracking-[0.3em] leading-none">
            Auto Clinic
          </span>
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
