"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Injector Cleaner",
    price: "Rp 30.000",
    image: "https://images.unsplash.com/photo-1621259182978-d1a1b4d3202d?q=80&w=200&auto=format&fit=crop", // Placeholder bottle
    color: "#FFD700"
  },
  {
    name: "Tire Sealant",
    price: "Rp 18.000",
    image: "https://images.unsplash.com/photo-1621259182978-d1a1b4d3202d?q=80&w=200&auto=format&fit=crop",
    color: "#FFD700"
  },
  {
    name: "Fuel Additive",
    price: "Rp 25.000",
    image: "https://images.unsplash.com/photo-1621259182978-d1a1b4d3202d?q=80&w=200&auto=format&fit=crop",
    color: "#FFD700"
  },
  {
    name: "Octane Booster",
    price: "Rp 25.000",
    image: "https://images.unsplash.com/photo-1621259182978-d1a1b4d3202d?q=80&w=200&auto=format&fit=crop",
    color: "#FFD700"
  }
];

export default function Products() {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 flex flex-col group overflow-hidden shadow-2xl"
            >
              {/* Product Header Text */}
              <div className="mb-6">
                <h3 className="text-3xl md:text-3xl font-black italic text-black leading-[0.9] uppercase tracking-tighter">
                  {product.name.split(' ')[0]} <br/> {product.name.split(' ')[1]}
                </h3>
              </div>

              {/* Image Area with Splash */}
              <div className="relative aspect-square mb-6 flex items-center justify-center">
                {/* Yellow Splash SVG Background */}
                <div className="absolute inset-0 z-0 scale-125 opacity-100 group-hover:scale-150 transition-transform duration-700">
                   <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-racing-yellow">
                      <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.2C87.4,-33.3,90.1,-16.7,89.6,-0.3C89.1,16.1,85.4,32.2,77.3,45.4C69.2,58.6,56.7,68.9,42.5,76.5C28.3,84.1,14.1,89,-0.2,89.3C-14.5,89.7,-29.1,85.4,-42.9,77.7C-56.8,70.1,-69.9,59,-78.3,45.5C-86.7,31.9,-90.4,15.9,-89.7,0.4C-89,-15.1,-84,30.2,-75.6,43C-67.2,55.8,-55.5,66.2,-41.8,73.4C-28.1,80.6,-13.4,84.7,0.7,83.5C14.8,82.3,29,75.8,41.9,67.5C54.8,59.3,66.4,49.2,74.1,36.5C81.8,23.8,85.6,8.5,85.2,-6.6C84.8,-21.7,80.1,-36.6,71.8,-49.2C63.5,-61.8,51.6,-72,38.1,-77.8C24.7,-83.6,9.6,-85,-4.4,-77.3C-18.4,-69.7,-31.2,-53,-43.3,-40.4C-55.3,-27.8,-66.6,-19.3,-73.4,-7.8C-80.2,3.7,-82.5,18.3,-78,31.2C-73.5,44.1,-62.1,55.3,-48.9,63.1C-35.7,70.9,-20.6,75.3,-5.3,84.5C10.1,93.8,25.6,108,38.2,107.4C50.8,106.8,60.6,91.4,69.5,76.2C78.4,61,86.5,46.1,90.2,30.3C94,14.5,93.4,-2.2,89.7,-18C85.9,-33.8,79.1,-48.6,68.7,-60.1C58.4,-71.5,44.5,-79.6,30.1,-84.6C15.7,-89.6,0.8,-91.4,-14.2,-87.4C-29.2,-83.4,-44.3,-73.6,-55.5,-60.7C-66.7,-47.8,-74,-31.8,-78,-15.5C-82,0.8,-82.7,17.4,-77.7,32.4C-72.7,47.4,-61.9,60.8,-48.6,69.7C-35.3,78.5,-19.5,82.8,-4,89.7C11.5,96.6,26.6,106.1,40,105.7C53.4,105.3,65.2,95,74.9,81.9C84.6,68.8,92.3,53,95.5,36.1C98.7,19.2,97.5,1.2,93.6,-15.9C89.7,-33,83.1,-49.1,72.4,-61.4C61.7,-73.7,46.9,-82.2,31.7,-87.3C16.5,-92.4,1,-94,-14.4,-90.4C-29.8,-86.8,-45.1,-78.1,-56.9,-65.4C-68.7,-52.7,-77.1,-36.1,-82,-18.8C-86.9,-1.5,-88.3,16.5,-83.4,32.5C-78.5,48.5,-67.2,62.5,-53.4,72.1C-39.6,81.7,-23.1,86.9,-6.2,97.6C10.7,108.3,28.1,124.5,42.8,126C57.5,127.5,69.5,114.3,79.1,99.2C88.7,84,95.9,67,100,49.2C104.1,31.4,105,12.8,102.1,-4.5C99.2,-21.8,92.5,-37.8,82.4,-50.8C72.3,-63.8,58.8,-73.8,43.9,-79C29,-84.2,12.7,-84.6,-3.4,-78.7C-19.5,-72.8,-35.4,-60.6,-48,-46.8C-60.6,-33,-70,-17.5,-75.2,-0.2C-80.4,17.1,-81.4,36.2,-75.4,52C-69.4,67.8,-56.4,80.3,-41.5,88.1C-26.6,95.9,-9.8,99,6.2,99.1C22.2,99.2,37.4,96.3,50,88.5C62.6,80.7,72.6,68,77.9,53.2C83.2,38.4,83.8,21.5,82,-3.5C80.2,-28.5,76,-61.6,63.1,-74.6C50.2,-87.6,28.6,-80.5,11.3,-83.2C-6,-85.9,-19,-98.4,-33.1,-101.3C-47.2,-104.2,-62.4,-97.5,-74,-85.9C-85.6,-74.3,-93.6,-57.8,-95.7,-40.4C-97.8,-23, -94,-4.7,-88.9,12.6C-83.8,29.9,-77.4,46.2,-66.4,59.3C-55.4,72.4,-39.8,82.3,-23.4,88.6C-7,94.9,10.2,97.6,26,94.3C41.8,91,56.2,81.7,66.5,69C76.8,56.3,83,40.2,86,23.3C89,6.4,88.8,-11.3,84,-27.2C79.2,-43.1,69.8,-57.2,57.7,-68C45.6,-78.8,30.8,-86.3,15.5,-89C0.2,-91.7,-15.6,-89.6,-28.9,-83C-42.2,-76.4,-53,-65.3,-61.2,-52.2C-69.4,-39.1,-75,-24.1,-76.9,-8.8c-1.9,15.3,0.3,30.6,8.2,43.2c7.9,12.6,21.5,22.5,36.4,28.4c14.9,5.9,31.1,7.8,45.3,4.1s26.4,-13,38.6,-22.3V44.7z" transform="translate(100 100)" />
                   </svg>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="relative z-10 w-48 h-48 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col items-center gap-2 mb-8">
                <span className="text-xl font-bold text-black">{product.price}</span>
              </div>

              {/* Button */}
              <button className="mt-auto w-full bg-racing-yellow hover:bg-black hover:text-white transition-colors duration-300 py-3 rounded-xl text-black font-black uppercase text-sm tracking-widest shadow-lg">
                Selengkapnya
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
