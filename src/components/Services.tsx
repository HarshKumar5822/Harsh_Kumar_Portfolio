import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ShieldCheck, Terminal, CheckCircle2 } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "End-to-end web application engineering using React 18, Node.js, Express 5, and MongoDB with modern authentication & responsive UI.",
      features: [
        "React.js & Vite Frontend Architecture",
        "Express 5 RESTful API & SSE Streaming",
        "MongoDB Atlas Schema & Mongoose ORM",
        "JWT Authentication & Role Administration",
        "Tailwind CSS & Glassmorphism UI",
        "Third-party API & AI Provider Integrations",
      ],
      icon: <Globe className="w-10 h-10 text-cyan-400" />,
    },
    {
      title: "Cyber Security & Code Defense",
      description: "Security assessment and code review services to identify vulnerability vectors and protect web applications against OWASP Top 10 risks.",
      features: [
        "Security Code Review & Static Audits",
        "Vulnerability Assessment & Threat Analysis",
        "Penetration Testing & Endpoint Inspection",
        "Secure JWT & Password Hashing Workflows",
        "Network Protocol & Port Auditing",
        "Input Sanitization & SQLi / XSS Defense",
      ],
      icon: <ShieldCheck className="w-10 h-10 text-emerald-400" />,
    },
    {
      title: "Python Application Development",
      description: "Custom Python applications, FastAPI microservices, and automation scripts tailored to data processing and workflow automation.",
      features: [
        "FastAPI & REST Microservices",
        "Automation Scripts & Scraping",
        "Document & PDF Processing Pipelines",
        "Database Management (SQLite / PostgreSQL)",
        "Custom Data Analytics Tools",
        "CLI Utilities & System Scripts",
      ],
      icon: <Terminal className="w-10 h-10 text-purple-400" />,
    },
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Providing high-quality development, cybersecurity assessment, and Python automation services with a relentless focus on performance and security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="h-full"
            >
              <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 h-full flex flex-col group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="mt-auto pt-4 border-t border-slate-800/60">
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-300 text-xs sm:text-sm">
                        <CheckCircle2 size={16} className="text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
