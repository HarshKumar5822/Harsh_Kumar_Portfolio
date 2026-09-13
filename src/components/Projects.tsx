import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sparkles } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "CodeGalaxy",
      description: "An immersive, gamified, and AI-driven interactive programming platform built on the MERN stack. Features real-time Agentic AI code copilot & repair engine, solar-system skill tree, interactive algorithm visualizers, AI interview simulator, and multimodal RAG document analysis.",
      technologies: ["React 18", "Node.js", "Express.js", "MongoDB", "Agentic AI", "Groq AI", "Gemini AI", "RAG"],
      category: "MERN Stack + AI",
      highlights: [
        "Gamified Solar System Skill Tree & Level Map",
        "Agentic AI Copilot & Automated Code Repair Engine",
        "Nebula Forge (Dynamic AI Challenge Generator)",
        "AI Technical Interview Simulator & Live Evaluator",
        "Interactive Algorithm & Data Structure Visualizer",
        "Multimodal RAG Document & Image Analyzer",
      ],
      githubUrl: "https://github.com/HarshKumar5822/CodeGalaxy-An-Agentic-AI-Based-Interactive-Programming-Learning-Platform",
      demoUrl: "https://code-galaxy-an-agentic-ai-based-int.vercel.app/",
    },
    {
      title: "FinGenius",
      description: "An intelligent full-stack AI-powered personal & family financial management suite. Features GeniusAI advisor powered by Groq LLaMA-3.3-70B, automated PDF/CSV bank statement parsing, 50/30/20 budget engine, and family financial collaboration.",
      technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Groq AI"],
      category: "MERN Stack + AI",
      highlights: [
        "GeniusAI Assistant (Groq LLaMA 3.3 70B)",
        "AI Bank Statement Parser (PDF & CSV)",
        "Dynamic 50/30/20 Budgeting Engine",
        "Family Circle & Portfolio Tracking",
      ],
      githubUrl: "https://github.com/HarshKumar5822/FinGenius---Finance-Management-Application",
      demoUrl: "https://fin-genius-finance-management-appli.vercel.app/",
    },
    {
      title: "EduMatch — College Recommendation System",
      description: "A college recommendation platform using SQL-based ranking and filtering across 200+ institutions based on EAMCET rank. Features rank-driven shortlisting and AI chatbot support.",
      technologies: ["JavaScript", "SQL", "React.js", "Node.js", "Express.js", "MongoDB"],
      category: "Full Stack & SQL",
      highlights: [
        "SQL-based Ranking Across 200+ Institutions",
        "EAMCET Rank-Driven Shortlisting Engine",
        "Accurate Search & Multi-Filter Logic",
        "EduBot AI Counselling Chatbot",
      ],
      githubUrl: "https://github.com/HarshKumar5822/EduMatch-College_Finder-",
    },
    {
      title: "HostelMate Alert — Hostel Finder",
      description: "A full-stack hostel discovery and comparison app with location-based filtering, secure JWT login, and server-side injection prevention.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      category: "Full Stack MERN",
      highlights: [
        "Location-Based Hostel Discovery & Filtering",
        "Secure JWT Login & Protected Routes",
        "Server-Side Injection Prevention & OWASP Practices",
        "Side-by-Side Hostel Comparison Engine",
      ],
      githubUrl: "https://github.com/HarshKumar5822/HostelMate---A-Hostel-Finder-Application",
      demoUrl: "https://hostel-mate-a-hostel-finder-ten.vercel.app/",
    },
    {
      title: "Zosh Food — Food Delivery Platform",
      description: "A full-stack food delivery platform with separate customer and admin workflows, JWT-based authentication, and role-based access control.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      category: "Full Stack MERN",
      highlights: [
        "Separate Customer & Admin Workflows",
        "JWT-Based Auth & Role-Based Access Control",
        "10+ REST API Endpoints Validated via Postman",
        "OWASP Top 10 Security & Input Validation",
      ],
      githubUrl: "https://github.com/HarshKumar5822/Zosh-Food-Online-Food-Delivery-App",
    },
    {
      title: "Med Alert — Smart Medicine Reminder",
      description: "An automated medicine reminder application using Python with Supabase as the backend, reliably managing 50+ daily scheduled alerts.",
      technologies: ["Python", "Supabase", "REST APIs", "SQL"],
      category: "Python & Supabase",
      highlights: [
        "Automated Medicine Reminders",
        "Supabase Backend Data Sync",
        "50+ Daily Scheduled Alerts Engine",
        "Reliable Dosage Schedule Tracking",
      ],
      githubUrl: "https://github.com/HarshKumar5822/Medi-Reminder---Sem1-Project-",
      demoUrl: "https://medi-reminder-sem1-project-j9pu.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Here are my featured full-stack applications and AI solutions built with modern technology stacks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 h-full flex flex-col group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <CardTitle className="text-white text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant="outline" 
                      className="border-purple-500/50 bg-purple-500/10 text-purple-300 whitespace-nowrap text-xs px-2.5 py-1"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col space-y-4">
                  <div>
                    <h4 className="text-cyan-400 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-cyan-400" /> Key Features
                    </h4>
                    <ul className="text-slate-300 text-sm space-y-1.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2.5 shrink-0 shadow-[0_0_6px_#38bdf8]"></span>
                          <span className="text-xs text-slate-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-cyan-400 font-semibold text-xs uppercase tracking-wider mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-slate-800/60">
                    <Button
                      asChild
                      className={`bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-cyan-500/40 rounded-xl ${
                        project.demoUrl ? "flex-1" : "w-full"
                      }`}
                    >
                      <a 
                        href={project.githubUrl || "https://github.com/HarshKumar5822"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-xs font-semibold text-cyan-300 hover:text-white"
                      >
                        <Github size={15} />
                        View GitHub
                      </a>
                    </Button>
                    {project.demoUrl && (
                      <Button
                        asChild
                        className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-md shadow-blue-600/25"
                      >
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-xs font-semibold text-white"
                        >
                          <ExternalLink size={15} />
                          View Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
