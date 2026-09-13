
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 80 },
    { name: "Java", level: 60 },
    { name: "MySQL", level: 70 },
  ];

  const cyberSecuritySkills = [
    { name: "Network Security", level: 75 },
    { name: "OS Security", level: 70 },
    { name: "Penetration Testing", level: 65 },
    { name: "DBMS", level: 75 },
  ];

  const softSkills = [
    "Time Management",
    "Leadership",
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Critical Thinking",
  ];

  const tools = [
    "Git",
    "Microsoft Office Suite",
    "Wordpad",
    "VS Code",
    "Postman",
    "MongoDB Compass",
  ];

  return (
    <section id="skills" className="py-10 md:py-12 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 gap-y-10 md:gap-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm h-full">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-blue-400 text-xl font-semibold">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-1 space-y-2.5">
                {technicalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1 text-sm font-medium">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
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
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm h-full">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-blue-400 text-xl font-semibold">Cyber Security Skills</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-1 space-y-2.5">
                {cyberSecuritySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1 text-sm font-medium">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
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
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm h-full">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-blue-400 text-xl font-semibold">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-1">
                <div className="grid grid-cols-2 gap-2.5">
                  {softSkills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-blue-500/10 rounded-lg p-2.5 text-center border border-blue-500/20"
                    >
                      <span className="text-gray-300 text-xs sm:text-sm">{skill}</span>
                    </div>
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
            <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm h-full">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-blue-400 text-xl font-semibold">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-1">
                <div className="grid grid-cols-2 gap-2.5">
                  {tools.map((tool) => (
                    <div
                      key={tool}
                      className="bg-purple-500/10 rounded-lg p-2.5 text-center border border-purple-500/20"
                    >
                      <span className="text-gray-300 text-xs sm:text-sm">{tool}</span>
                    </div>
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
