import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Shield, Award } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: "Current Status",
      detail: "4th Year Cyber Security Student",
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
      title: "Location",
      detail: "Hyderabad, India (Originally from Jharkhand)",
    },
    {
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      title: "Specialization",
      detail: "Cyber Security & MERN Stack Development",
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      title: "Academic CGPA",
      detail: "8.50 / 10.0 — Malla Reddy University",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-800/70 border-slate-700/60 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 h-full">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  My Journey <span className="text-cyan-400">🚀</span>
                </h3>
                <p className="text-slate-200 leading-relaxed mb-4">
                  I'm a passionate 4th-year Cyber Security student at <strong className="text-cyan-300">Malla Reddy University, Hyderabad</strong>, with a current CGPA of 8.50. Originally from Jharkhand, I've embraced the vibrant tech ecosystem of Hyderabad while pursuing my passion for cybersecurity, web development, and AI engineering.
                </p>
                <p className="text-slate-200 leading-relaxed mb-4">
                  My core expertise lies in the <strong className="text-cyan-300">MERN stack</strong>, combined with deep knowledge of security principles, network defense, penetration testing, and modern AI model integrations to craft secure, high-performance web applications.
                </p>
                <p className="text-slate-200 leading-relaxed">
                  When I'm not coding, I actively explore emerging security vulnerabilities, learn penetration testing frameworks, and build interactive projects that solve real-world problems.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-slate-800/70 border-slate-700/60 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-1">{item.title}</h4>
                      <p className="text-slate-100 text-sm md:text-base font-semibold">{item.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
