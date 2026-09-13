import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-950">
      {/* Deep Cyber Space Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />

      {/* Cyber Grid Lines Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-100"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.08), rgba(168, 85, 247, 0.04) 40%, transparent 80%)`,
        }}
      />

      {/* Animated Glowing Orb 1: Cyan / Blue Glow */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -100, 60, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
      />

      {/* Animated Glowing Orb 2: Purple / Violet Glow */}
      <motion.div
        animate={{
          x: [0, -90, 60, 0],
          y: [0, 80, -110, 0],
          scale: [1, 1.15, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-purple-600/20 rounded-full blur-[140px]"
      />

      {/* Animated Glowing Orb 3: Emerald / Cyber Green Glow */}
      <motion.div
        animate={{
          x: [0, 70, -80, 0],
          y: [0, 110, -70, 0],
          scale: [1, 1.3, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-[30rem] h-[30rem] bg-emerald-500/15 rounded-full blur-[150px]"
      />

      {/* Floating Animated Particles / Cyber Dust */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: Math.random() * 0.5 + 0.2,
              scale: Math.random() * 0.8 + 0.5,
            }}
            animate={{
              y: ["0px", "-100px", "0px"],
              x: ["0px", `${(i % 2 === 0 ? 1 : -1) * 30}px`, "0px"],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + (i % 7),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"
          />
        ))}
      </div>
    </div>
  );
};
