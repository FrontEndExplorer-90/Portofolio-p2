import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-[#090909] text-[#E8E1D9] flex items-center justify-center">

      {/* Cinematic glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,124,82,0.12),transparent_60%)]"></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >

        <h1
          className="text-7xl md:text-9xl tracking-[0.2em]"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          JANINA
        </h1>

        <h2
          className="text-4xl md:text-6xl mt-4 text-[#A67C52]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          MEYER
        </h2>

        <p
          className="mt-8 uppercase tracking-[0.4em] text-sm text-zinc-500"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          FRONTEND DEVELOPER • UX DESIGN • DIGITAL EXPERIENCES
        </p>

      </motion.div>
    </main>
  );
}
