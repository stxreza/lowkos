import { MessageCircleMore } from "lucide-react"

import { CONTACT_LINKS } from "@/lib/external-links"

export default function FloatingWhatsapp() {
  return (
    <a
      href={CONTACT_LINKS.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Lowkos"
      className="wa-float fixed bottom-5 right-5 z-[120] inline-flex size-14 items-center justify-center rounded-full border border-emerald-200/35 bg-[#0b5f3b] text-white shadow-[0_14px_32px_rgba(11,95,59,0.55)] transition-transform duration-300 hover:scale-110 hover:bg-[#11764b] md:bottom-7 md:right-7"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/30 animate-ping [animation-duration:2.6s]"
      />
      <MessageCircleMore className="relative z-10 size-7" />
    </a>
  )
}
