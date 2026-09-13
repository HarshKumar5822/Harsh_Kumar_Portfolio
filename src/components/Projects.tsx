
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

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
      title: "EduMatch",
      description: "An AI-powered EAPCET/EAMCET engineering college predictor & counselling portal built on the MERN stack. Features Groq LLM (Llama-3.3-70B) admission chatbot, client-side rank card OCR scanner, ROI predictor, and interactive web options builder.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq AI", "Tesseract.js"],
      category: "MERN Stack + AI",
      highlights: [
        "EduBot AI Counselling Chatbot (Groq LLM)",
        "In-Browser Rank Card Scanner (Tesseract.js OCR)",
        "Smart Branch Matcher & AI ROI Predictor",
        "Interactive Web Options Priority Builder",
      ],
      githubUrl: "https://github.com/HarshKumar5822/EduMatch-College_Finder-",
    },
    {
      title: "HostelMate",
      description: "A modern, full-stack hostel discovery & comparison platform for students & working professionals in India. Features smart multi-filter search, interactive map view, side-by-side hostel comparisons with photo lightbox, AI recommendation assistant, dynamic Value Score algorithm, and owner analytics dashboard.",
      technologies: ["React 18", "TypeScript", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      category: "MERN Stack + AI",
      highlights: [
        "Smart Discovery & Multi-Filter Search",
        "Interactive Map View & Hover Cards",
        "Side-by-Side Comparison & Lightbox Gallery",
        "Dynamic 'Bang for your Buck' Value Score",
        "AI Hostel Assistant & Recommendations",
        "Hostel Owner Dashboard & Direct Enquiry",
      ],
      githubUrl: "https://github.com/HarshKumar5822/HostelMate---A-Hostel-Finder-Application",
      demoUrl: "https://hostel-mate-a-hostel-finder-ten.vercel.app/",
    },
    {
      title: "Zosh Food",
      description: "An enterprise-grade full-stack online food ordering & restaurant management system. Features JWT authentication, Stripe payment gateway, dynamic menu customizer, live order tracking, and multi-tier role administration.",
      technologies: ["Java 17", "Spring Boot 3", "Spring Security", "React 18", "Redux", "Material UI", "Stripe API", "MySQL"],
      category: "Full Stack Java",
      highlights: [
        "Stripe Payment Gateway Integration",
        "JWT Auth & Multi-Tier Role Management",
        "Restaurant & Categorized Menu Admin",
        "Real-Time Cart & Live Order Tracking",
      ],
      githubUrl: "https://github.com/HarshKumar5822/Zosh-Food-Online-Food-Delivery-App",
    },
    {
      title: "MediReminder",
      description: "A complete full-stack medication reminder application featuring secure user authentication, interactive medication management, and daily dosage schedule tracking with real-time status updates.",
      technologies: ["Python", "FastAPI", "SQLite", "React.js", "TypeScript", "JWT Auth"],
      category: "Full Stack Python",
      highlights: [
        "User Authentication (JWT & Hashed Security)",
        "Medication Management (Add, View & Delete)",
        "Daily Reminders & Dosage Status Tracking",
        "Responsive Modern Design & Real-Time Updates",
      ],
      githubUrl: "https://github.com/HarshKumar5822/Medi-Reminder---Sem1-Project-",
      demoUrl: "https://medi-reminder-sem1-project-j9pu.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills in full-stack development, 
            cybersecurity, and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className="border-purple-500 text-purple-400 whitespace-nowrap"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-2 pt-2">
                    <Button
                      asChild
                      variant="outline"
                      className={`border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white ${
                        project.demoUrl ? "flex-1" : "w-full"
                      }`}
                    >
                      <a 
                        href={project.githubUrl || "https://github.com/HarshKumar5822"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm"
                      >
                        <Github size={16} />
                        View on GitHub
                      </a>
                    </Button>
                    {project.demoUrl && (
                      <Button
                        asChild
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-sm"
                        >
                          <ExternalLink size={16} />
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
