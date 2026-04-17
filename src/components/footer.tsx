import { MessageSquare as Facebook, Camera as Instagram, Send as Twitter, Play as Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Copyright */}
          <div className="text-zinc-500 text-sm font-medium">
            © 2023 right Lowkos Auto Clinic
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
              <Twitter className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
              <Facebook className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300">
              <Youtube className="w-5 h-5 fill-current" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
