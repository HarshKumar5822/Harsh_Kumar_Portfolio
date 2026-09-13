import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, ShieldAlert, Users, ExternalLink, CheckCircle2, Star } from "lucide-react";

export const ExperienceCertifications = () => {
  const certifications = [
    {
      title: "Python (Basic) Certification",
      issuer: "HackerRank",
      type: "Programming & Development",
      icon: <Award className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Python for Absolute Beginners",
      issuer: "EC-Council",
      type: "Cybersecurity & Programming",
      icon: <Award className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "Technical Training & Project Certification",
      issuer: "Infosys Springboard",
      type: "Enterprise Tech Training",
      icon: <Award className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Full-Stack Web Development Certification",
      issuer: "ApexPlanet Software",
      type: "Full-Stack Development",
      icon: <Award className="w-5 h-5 text-purple-400" />,
    },
  ];

  const experience = [
    {
      role: "Cyber Security Job Simulation",
      organization: "Deloitte",
      period: "Virtual Experience",
      category: "Cybersecurity & Enterprise Simulations",
      description: "Hands-on experience in enterprise threat modeling, risk analysis, vulnerability assessments, and incident response workflows.",
      highlights: [
        "Enterprise Threat Modeling & Risk Analysis",
        "Incident Response Plan Formulation",
        "Security Assessment & Mitigation Workflows",
      ],
      badge: "Industry Simulation",
      icon: <ShieldAlert className="w-6 h-6 text-cyan-400" />,
    },
    {
      role: "Web Development Intern",
      organization: "Wayspire",
      period: "Internship",
      category: "Full Stack Web Development",
      description: "Project-based web development internship earning Certification with Excellence Recognition for high-quality full-stack application development.",
      highlights: [
        "Excellence Recognition Award",
        "Full-Stack Web Application Engineering",
        "Responsive Component & RESTful API Design",
      ],
      badge: "Excellence Recognition",
      icon: <Briefcase className="w-6 h-6 text-purple-400" />,
    },
    {
      role: "Ethical Hacking Virtual Intern",
      organization: "Virtual Cybersecurity Internship",
      period: "Internship",
      category: "Cybersecurity & Penetration Testing",
      description: "Practical training and project execution in network vulnerability scanning, penetration testing techniques, and threat modeling.",
      highlights: [
        "Network Vulnerability Scanning & Analysis",
        "Penetration Testing & Security Auditing",
        "Incident Response & System Hardening",
      ],
      badge: "Security Internship",
      icon: <ShieldAlert className="w-6 h-6 text-emerald-400" />,
    },
  ];

  const leadership = [
    {
      title: "GDG Hyderabad Tech Event Co-Organizer",
      organization: "Google Developer Groups (GDG) Hyderabad",
      details: "Co-organized 3+ technical events and hackathons with 100+ attendees, fostering developer collaboration, technical workshops, and community growth.",
      icon: <Users className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Academic Excellence & Project Portfolio",
      organization: "Malla Reddy University",
      details: "Maintained a strong 8.50 CGPA while successfully completing 4+ production-ready full-stack applications and multiple security certifications.",
      icon: <Star className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            My industry internships, cybersecurity simulations, professional certifications, and community leadership.
          </p>
        </motion.div>

        {/* Experience & Simulations Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            Internships & Industry Simulations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="h-full"
              >
                <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all duration-300 h-full flex flex-col">
                  <CardHeader className="p-6 pb-3">
                    <div className="flex justify-between items-start mb-3">
                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                        {item.icon}
                      </div>
                      <Badge className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs">
                        {item.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-xl font-bold">{item.role}</CardTitle>
                    <p className="text-cyan-400 font-semibold text-sm">{item.organization}</p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {item.description}
                    </p>
                    <div className="border-t border-slate-800/80 pt-3">
                      <ul className="space-y-1.5">
                        {item.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-center text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-2 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Leadership split grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500 h-full">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-cyan-400 text-xl font-bold flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  Certifications & Training
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-4 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                        <p className="text-cyan-400 font-semibold text-xs">{cert.issuer}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-slate-700 text-slate-300 text-[11px] shrink-0">
                      {cert.type}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements & Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 h-full">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-purple-400 text-xl font-bold flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Achievements & Leadership
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4">
                {leadership.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{item.title}</h4>
                        <p className="text-purple-400 font-semibold text-xs">{item.organization}</p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed pl-11">
                      {item.details}
                    </p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
