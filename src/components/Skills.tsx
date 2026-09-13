import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, ShieldAlert, Cpu, Wrench } from "lucide-react";

export const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript (ES6+) / Python / Java", level: 90 },
    { name: "React.js / Tailwind CSS / Responsive Design", level: 88 },
    { name: "Node.js / Express.js / REST APIs", level: 85 },
    { name: "JWT Authentication & Role-Based Access Control", level: 85 },
    { name: "MongoDB / MySQL / PostgreSQL / Supabase", level: 80 },
    { name: "HTML5 / CSS3 / Web Standards", level: 95 },
  ];

  const cyberSecuritySkills = [
    { name: "OWASP Top 10 Security Defense", level: 88 },
    { name: "Secure Coding & Input Validation", level: 85 },
    { name: "Authentication & Authorization (JWT/RBAC)", level: 90 },
    { name: "Network Security & Vulnerability Scanning", level: 80 },
    { name: "Threat Modeling & Incident Response", level: 78 },
    { name: "SQL Injection & XSS Prevention", level: 85 },
  ];

  const softSkills = [
    "Problem Solving",
    "Time Management",
    "Leadership & Event Organizing",
    "Team Collaboration",
    "Critical Thinking",
    "Technical Communication",
  ];

  const tools = [
    "Git & GitHub",
    "Postman API Studio",
    "VS Code",
    "Linux / OS Command Line",
    "MongoDB Compass",
    "Docker / Containers",
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills & Tools</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500 h-full">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-cyan-400 text-xl font-bold flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-cyan-400" /> Full Stack Web Development
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2 space-y-4">
                {technicalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5 text-sm font-medium">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2.5 bg-slate-950/90 border border-slate-800" 
                      indicatorClassName="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 h-full">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-emerald-400 text-xl font-bold flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-emerald-400" /> Cyber Security Competencies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2 space-y-4">
                {cyberSecuritySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5 text-sm font-medium">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-emerald-400 font-bold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2.5 bg-slate-950/90 border border-slate-800" 
                      indicatorClassName="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-300 shadow-[0_0_12px_rgba(16,185,129,0.7)]"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 h-full">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-purple-400 text-xl font-bold flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-400" /> Professional & Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.04 }}
                      className="bg-purple-500/10 rounded-xl p-3 text-center border border-purple-500/20 text-purple-200 text-xs sm:text-sm font-medium shadow-[0_0_10px_rgba(168,85,247,0.1)]"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500 h-full">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-cyan-400 text-xl font-bold flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-cyan-400" /> Developer Tools & Environments
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool) => (
                    <motion.div
                      key={tool}
                      whileHover={{ scale: 1.04 }}
                      className="bg-cyan-500/10 rounded-xl p-3 text-center border border-cyan-500/20 text-cyan-200 text-xs sm:text-sm font-medium shadow-[0_0_10px_rgba(56,189,248,0.1)]"
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
