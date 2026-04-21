import { Camera as Instagram, Music2, Phone } from "lucide-react";
import { CONTACT_LINKS, SOCIAL_LINKS } from "@/lib/external-links";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Copyright */}
          <div className="text-zinc-500 text-sm font-medium">
            © 2023 right Lowkos Auto Clinic
          </div>

          {/* Social + Contact */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <a
              href={`tel:${CONTACT_LINKS.phoneE164}`}
              className="inline-flex items-center gap-2 text-zinc-300 transition-colors duration-300 hover:text-white"
              aria-label="Telepon Lowkos"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wide">{CONTACT_LINKS.phoneDisplay}</span>
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
              aria-label="Lowkos TikTok"
            >
              <Music2 className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wide">TikTok</span>
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300"
              aria-label="Lowkos Instagram"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wide">Instagram</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
