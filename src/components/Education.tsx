import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, School, BookOpen } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology — Cyber Security",
      institution: "Malla Reddy University",
      location: "Hyderabad, Telangana, India",
      duration: "2023 - 2027",
      grade: "CGPA: 8.50 / 10.0",
      status: "Currently Pursuing (4th Year)",
      description: "Specializing in Cyber Security with a focus on network defense, penetration testing, ethical hacking, and secure full-stack software development.",
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
    },
    {
      degree: "Higher Secondary Certificate — Intermediate (XII)",
      institution: "S.S+2 High School",
      location: "Jharkhand, India",
      duration: "2021 - 2023",
      grade: "79%",
      board: "Jharkhand Academic Council (JAC)",
      description: "Completed higher secondary education specializing in Science (MPC) with strong academic standing.",
      icon: <School className="w-6 h-6 text-purple-400" />,
    },
    {
      degree: "Secondary School Certificate (X)",
      institution: "Kisan High School",
      location: "Jharkhand, India",
      duration: "2021",
      grade: "74%",
      board: "Jharkhand Academic Council (JAC)",
      description: "Completed secondary school education with foundational excellence in Science and Mathematics.",
      icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Academic <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300">
                <CardHeader className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                        {edu.icon}
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl font-bold mb-1">{edu.degree}</CardTitle>
                        <p className="text-cyan-400 font-semibold text-sm">{edu.institution}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{edu.location}</p>
                      </div>
                    </div>
                    <div className="md:text-right shrink-0">
                      <Badge variant="outline" className="border-cyan-500/40 bg-cyan-500/10 text-cyan-300 mb-2 px-3 py-1 text-xs">
                        {edu.duration}
                      </Badge>
                      <p className="text-emerald-400 font-bold text-sm">{edu.grade}</p>
                      {edu.status && (
                        <Badge className="bg-emerald-500/20 text-emerald-300 mt-1 border border-emerald-500/30 text-[11px]">
                          {edu.status}
                        </Badge>
                      )}
                      {edu.board && (
                        <p className="text-slate-400 text-xs mt-1">{edu.board}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-3">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
