import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out, Harsh will respond shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-cyan-400" />,
      label: "Email",
      value: "harshkragrawal2006@gmail.com",
      href: "mailto:harshkragrawal2006@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-cyan-400" />,
      label: "Phone / WhatsApp",
      value: "+91 9279912147",
      href: "tel:9279912147",
    },
    {
      icon: <Github className="w-5 h-5 text-cyan-400" />,
      label: "GitHub Profile",
      value: "HarshKumar5822",
      href: "https://github.com/HarshKumar5822",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-cyan-400" />,
      label: "LinkedIn Profile",
      value: "harsh-kumar-936b47293",
      href: "https://www.linkedin.com/in/harsh-kumar-936b47293",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Whether you have a question, project proposal, or cybersecurity inquiry, feel free to drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-bold mb-2">Direct Contact Details</CardTitle>
                <p className="text-slate-300 text-sm">
                  Based in Hyderabad, India. Available for software engineering roles, security research, internships, and full-stack projects.
                </p>
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 group"
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{info.label}</p>
                      <p className="text-white font-semibold text-sm group-hover:text-cyan-300 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
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
            <Card className="bg-slate-900/60 border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-bold">Send a Direct Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-950/70 border-slate-800 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-950/70 border-slate-800 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-slate-950/70 border-slate-800 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none rounded-xl"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold h-12 rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 pt-8 border-t border-slate-800/80"
        >
          <p className="text-slate-400 text-sm">
            Created with ❤️ by <strong className="text-cyan-400">Harsh Kumar</strong> © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
