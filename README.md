# 💼 Harsh Kumar — Personal Portfolio Website

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-0.0-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

A modern, responsive, and high-performance personal portfolio website built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**. This portfolio highlights my background in **Cyber Security** and **MERN Stack Development**, featuring interactive project showcases, skill level visualizers, services offered, educational background, and a live contact portal.

---

## 👤 About Harsh Kumar

I am a 4th-year **Cyber Security** undergraduate student at **Malla Reddy University, Hyderabad** (CGPA: 8.50/10.0), originally from Jharkhand. I specialize in building secure, scalable full-stack web applications using the MERN stack while integrating cybersecurity principles, penetration testing awareness, and modern AI capabilities.

- 🎓 **Education**: B.Tech in Cyber Security (2023 - 2027)
- 📍 **Location**: Hyderabad, Telangana, India
- 🌐 **Portfolio Repo**: [Harsh_Kumar_Portfolio](https://github.com/HarshKumar5822/Harsh_Kumar_Portfolio)
- 📧 **Email**: [harshkragrawal2006@gmail.com](mailto:harshkragrawal2006@gmail.com)
- 💼 **LinkedIn**: [harsh-kumar-936b47293](https://www.linkedin.com/in/harsh-kumar-936b47293)
- 🐙 **GitHub**: [HarshKumar5822](https://github.com/HarshKumar5822)

---

## 🌟 Key Features

1. **⚡ Modern Interactive Hero Section**
   - Profile avatar with smooth micro-animations.
   - One-click PDF Resume Download (`Harsh_Kumar_Resume.pdf`).
   - Quick navigation buttons to project work and contact section.
   - Quick social links (GitHub, LinkedIn, Email, Phone).

2. **📖 About & Academic Profile**
   - Detailed background narrative highlighting journey from Jharkhand to Hyderabad.
   - CGPA, current specialization, and career goals summary.

3. **📊 Dynamic Skill Visualizer**
   - Progress bar indicators for **Technical Skills** (JavaScript, React.js, Node.js, MongoDB, HTML/CSS, Python, Java, MySQL).
   - Dedicated **Cyber Security Skills** section (Network Security, OS Security, Penetration Testing, DBMS).
   - Categorized grid cards for **Soft Skills** and **Tools & Technologies** (Git, VS Code, Postman, MongoDB Compass, MS Office).

4. **🚀 Featured Projects Showcase**
   - **CodeGalaxy**: MERN Stack + Agentic AI interactive programming platform featuring Monaco Editor, solar-system skill tree, algorithm visualizers, AI interview simulator, and RAG document analysis.
   - **FinGenius**: Full-stack personal & family financial management suite with Groq LLaMA-3.3-70B AI advisor, statement parser, and 50/30/20 budgeting.
   - **EduMatch**: AI-powered EAPCET/EAMCET engineering college predictor & counselling portal with Groq LLM chatbot and in-browser rank card OCR scanner.
   - **HostelMate**: Full-stack hostel discovery & comparison platform with interactive maps, lightbox gallery, and dynamic Value Score algorithm.
   - **Zosh Food**: Enterprise full-stack food delivery system with Spring Boot 3, React 18, Stripe API, JWT, and MySQL.
   - **MediReminder**: Full-stack medication schedule tracker built with Python FastAPI, SQLite, React, and JWT security.
   - Includes direct **View on GitHub** and live **View Demo** links for deployed applications.

5. **💼 Professional Services Section**
   - Full Stack Web Development (MERN Stack, RESTful APIs, Auth & Databases).
   - Cyber Security Consulting (Vulnerability Assessment, Penetration Testing, Code Review).
   - Python Application Development (Desktop apps, automation scripts, data processing tools).

6. **🎓 Educational Timeline**
   - B.Tech in Cyber Security — Malla Reddy University (2023 - 2027) | CGPA: 8.50
   - Intermediate XII — S.S+2 High School (JAC Board, 2021 - 2023) | 79%
   - Secondary Certificate X — Kisan High School (JAC Board, 2021) | 74%

7. **📬 Interactive Contact Form & Toast Notifications**
   - Direct form submission with real-time feedback using `sonner` and `shadcn/ui` toast notifications.
   - Direct interactive links for Email, Phone (+91 9279912147), GitHub, and LinkedIn.

8. **🎨 Glassmorphism & Responsive UI**
   - Fully responsive layout across mobile, tablet, and desktop viewports.
   - Sleek dark theme with glassmorphism backdrop blurs and Framer Motion view transition animations.

---

## 🛠️ Technology Stack

### Frontend Core
- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Styling & Design System
- **CSS Framework**: [Tailwind CSS v3](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Toast Notifications**: `sonner` & `@radix-ui/react-toast`
- **Class Merging**: `clsx` & `tailwind-merge`

---

## 📁 Project Directory Structure

```text
Harsh_Kumar_Portfolio/
├── public/
│   ├── Harsh_Kumar_Resume.pdf       # Printable/Downloadable Resume PDF
│   ├── favicon.ico                  # Browser favicon icon
│   ├── placeholder.svg              # Image placeholder graphic
│   ├── robots.txt                   # Search engine crawler directives
│   └── lovable-uploads/             # Portfolio profile avatar & media uploads
│       ├── 9192a571-d207-4684-9fee-8163b58cc330.png
│       └── d42bfd05-3fe0-45e6-87d0-2fcb62bc8e3e.png
├── src/
│   ├── components/                  # Page Section Components
│   │   ├── ui/                      # shadcn/ui Component Primitives
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ... (additional primitives)
│   │   ├── About.tsx                # Academic journey, location, & CGPA card
│   │   ├── Contact.tsx              # Interactive contact form & social info
│   │   ├── Education.tsx            # Education timeline & school history
│   │   ├── Hero.tsx                 # Banner intro, resume download & social links
│   │   ├── Navigation.tsx           # Floating glassmorphism navbar & mobile menu
│   │   ├── Projects.tsx             # Showcase cards for CodeGalaxy, FinGenius, etc.
│   │   ├── Services.tsx             # Full-Stack, Security, & Python service cards
│   │   └── Skills.tsx               # Technical, Cyber Security, & Soft skill bars
│   ├── hooks/                       # Custom React Hooks
│   │   ├── use-mobile.tsx           # Mobile viewport detection hook
│   │   └── use-toast.ts             # Toast notification state hook
│   ├── lib/                         # Core Utilities
│   │   └── utils.ts                 # Tailwind class merger utility (`cn`)
│   ├── pages/                       # Route Pages
│   │   ├── Index.tsx                # Main Portfolio Landing Page
│   │   └── NotFound.tsx             # 404 Error fallback page
│   ├── App.css                      # Global component styles
│   ├── App.tsx                      # Main React application & router config
│   ├── index.css                    # Tailwind CSS imports & theme definitions
│   ├── main.tsx                     # Application DOM entry point
│   └── vite-env.d.ts                # TypeScript Vite environment declarations
├── .gitignore                       # Git file tracking exclusion rules
├── components.json                  # shadcn/ui configuration file
├── eslint.config.js                 # ESLint code linting rules
├── index.html                       # Base HTML template
├── package.json                     # Dependencies, scripts & workspace metadata
├── postcss.config.js                # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts               # Tailwind CSS custom colors & theme extension
├── tsconfig.json                    # Master TypeScript config
├── tsconfig.app.json                # Application TypeScript compilation config
├── tsconfig.node.json               # Vite Node process TypeScript config
├── vite.config.ts                   # Vite bundler build configuration & path aliases
└── README.md                        # Project documentation
```

---

## 💻 Local Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/HarshKumar5822/Harsh_Kumar_Portfolio.git
   cd Harsh_Kumar_Portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## 🌐 Production Deployment

This portfolio is configured for instant deployment on **Vercel** or **Netlify**:
- Build Command: `npm run build`
- Output Directory: `dist`

---

Created with ❤️ by **Harsh Kumar**
