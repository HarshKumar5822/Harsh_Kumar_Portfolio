import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download, ShieldCheck } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" 
        : "bg-slate-950/40 backdrop-blur-md border-b border-slate-800/40"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2 group"
          >
            <ShieldCheck className="w-7 h-7 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span>Harsh <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Kumar</span></span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="/Harsh_Kumar_Resume.pdf"
              download="Harsh_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-md shadow-blue-600/20 transform hover:-translate-y-0.5"
            >
              <Download size={14} className="text-white" />
              Resume
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-cyan-400 p-2 focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl rounded-b-2xl px-2 space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2.5 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Harsh_Kumar_Resume.pdf"
              download="Harsh_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-4 py-2.5 px-4 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
