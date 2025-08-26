'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-screen md:w-3/4 mx-auto bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url('/honey-marmalade-hero.png')", backgroundPosition: 'center 30%' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
          Honey Marmalade
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-xl mx-auto italic">
          Singer-songwriter blending blues, rock, indie & soul
        </p>
      </motion.div>
    </section>
  );
}