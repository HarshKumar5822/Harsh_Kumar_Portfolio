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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-900">
      {/* Sleek Luminous Slate Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-900/95 to-slate-950" />

      {/* Crisp Modern Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"
        style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 80%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 80%, transparent 100%)",
        }}
      />

      {/* Luminous Interactive Cursor Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-100"
        style={{
          background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.12), rgba(168, 85, 247, 0.06) 40%, transparent 80%)`,
        }}
      />

      {/* Animated Glowing Orb 1: Luminous Cyan / Blue Glow */}
      <motion.div
        animate={{
          x: [0, 90, -60, 0],
          y: [0, -110, 70, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/6 w-[30rem] h-[30rem] bg-cyan-500/25 rounded-full blur-[130px]"
      />

      {/* Animated Glowing Orb 2: Luminous Purple Glow */}
      <motion.div
        animate={{
          x: [0, -100, 70, 0],
          y: [0, 90, -120, 0],
          scale: [1, 1.2, 1.35, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-purple-600/25 rounded-full blur-[140px]"
      />

      {/* Animated Glowing Orb 3: Luminous Royal Blue Glow */}
      <motion.div
        animate={{
          x: [0, 80, -90, 0],
          y: [0, 120, -80, 0],
          scale: [1, 1.35, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-[34rem] h-[34rem] bg-blue-600/20 rounded-full blur-[150px]"
      />

      {/* Floating Animated Ambient Dust Particles */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.8 + 0.5,
            }}
            animate={{
              y: ["0px", "-100px", "0px"],
              x: ["0px", `${(i % 2 === 0 ? 1 : -1) * 30}px`, "0px"],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 8 + (i % 7),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8]"
          />
        ))}
      </div>
    </div>
  );
};
