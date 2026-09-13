import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = [
  {
    text: "MERN Stack Developer",
    colorClass: "bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent",
    borderClass: "border-cyan-500/50",
    cursorClass: "bg-cyan-400",
  },
  {
    text: "Cyber Security Specialist",
    colorClass: "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent",
    borderClass: "border-emerald-500/50",
    cursorClass: "bg-emerald-400",
  },
  {
    text: "Python Full Stack Developer",
    colorClass: "bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent",
    borderClass: "border-purple-500/50",
    cursorClass: "bg-purple-400",
  },
];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const activeTitle = titles[titleIndex];

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (currentText.length < activeTitle.text.length) {
          setCurrentText(activeTitle.text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(activeTitle.text.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }
    };

    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, activeTitle]);

  return (
    <section id="home" className="min-h-[92vh] flex items-center justify-center px-4 relative pt-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-52 h-52 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400/80 shadow-[0_0_40px_rgba(56,189,248,0.4)] ring-4 ring-cyan-500/20 group relative">
            <img 
              src="/lovable-uploads/d42bfd05-3fe0-45e6-87d0-2fcb62bc8e3e.png" 
              alt="Harsh Kumar"
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
        >
          Hello, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Harsh Kumar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl font-bold mb-6 h-10 flex items-center justify-center gap-1"
        >
          <span className={`${activeTitle.colorClass} border-b-2 ${activeTitle.borderClass} pb-0.5 min-h-[36px] inline-block transition-all duration-300`}>
            {currentText}
          </span>
          <span className={`w-0.5 h-7 ${activeTitle.cursorClass} inline-block animate-pulse`}></span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          4th Year Cyber Security Student at Malla Reddy University. Specializing in building secure, high-performance web applications and AI-driven solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-6 rounded-xl shadow-lg shadow-blue-600/25 transform hover:-translate-y-0.5 transition-all duration-200 border-none"
          >
            <a 
              href="/Harsh_Kumar_Resume.pdf" 
              download="Harsh_Kumar_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white"
            >
              <Download size={18} className="text-white" />
              Download Resume
            </a>
          </Button>

          <Button
            asChild
            className="bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-cyan-500/40 font-semibold px-7 py-6 rounded-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <a href="#projects" className="flex items-center gap-2 text-sm text-cyan-300 hover:text-white">
              View Projects <ArrowRight size={16} />
            </a>
          </Button>

          <Button
            asChild
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold px-7 py-6 rounded-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <a href="#contact" className="flex items-center gap-2 text-sm text-slate-200 hover:text-white">
              Get In Touch
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/HarshKumar5822"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 hover:scale-125 transition-all duration-300 p-2"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-kumar-936b47293"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 hover:scale-125 transition-all duration-300 p-2"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:harshkragrawal2006@gmail.com"
            className="text-slate-400 hover:text-cyan-400 hover:scale-125 transition-all duration-300 p-2"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:9279912147"
            className="text-slate-400 hover:text-cyan-400 hover:scale-125 transition-all duration-300 p-2"
          >
            <Phone size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
