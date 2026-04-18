import Hero from "@/components/hero";
import Sejarah from "@/components/sejarah";
import VisiMisi from "@/components/visi-misi";
import WhyUs from "@/components/why-us";
import Advantages from "@/components/advantages";
import Products from "@/components/products";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero doesn't need diagonal clip usually or it's at the top */}
      <Hero />
      
      {/* Sejarah with Diagonal Clip */}
      <div className="relative z-10 -mt-20"> {/* Negative margin to overlap Hero slightly */}
        <div className="clip-diagonal bg-black">
           <Sejarah />
        </div>
      </div>

      {/* VisiMisi - We'll use a complementary diagonal or keep it clean if it's too busy */}
      <div className="relative z-20 -mt-10">
        <VisiMisi />
      </div>

      {/* Advantages (Merged with Why Us) */}
      <div className="relative z-30 bg-black">
        <Advantages />
      </div>

      {/* Products with diagonal top transition */}
      <div className="relative z-40 -mt-16 bg-background border-t border-white/5">
        <Products />
      </div>

      {/* Testimonials */}
      <div className="relative z-50 bg-black">
        <Testimonials />
      </div>

      {/* CTA Section */}
      <div className="relative z-60 bg-black">
        <Cta />
      </div>
    </div>
  );
}
