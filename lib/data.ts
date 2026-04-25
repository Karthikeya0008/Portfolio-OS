import { Database } from "lucide-react";

export const resumeData = {
  name: {
    hi: "Hi, I'm ",
    first: "Dara",
    last: "Karthikeya",
  },
  tagline: "Code in one hand, ideas in the other",
  description:
    "I don’t limit myself to one domain, I explore across software and beyond. From understanding code to working with hardware and circuitry, I build systems shaped by curiosity and real-world thinking",
  email: "dara.karthikeya@outlook.com",
  phone: "+91 87128 84472",
  linkedin: "https://www.linkedin.com/in/dara-karthikeya-572b78281/",
  github: "https://github.com/Karthikeya0008",
  Blogs: "https://medium.com/@darakarthikeya",
  tech: "https://codolio.com/profile/darakarthikeya",
  stats: [
    { value: "8.89", label: "CGPA / 10" },
    { value: "7+", label: "PROJECTS" },
    { value: "2028", label: "GRAD YEAR" },
  ],
  skills: {
    Frontend: ["Next.js", "Vue.js", "React.js", "HTML5", "CSS 3", "Tailwind CSS", "BootStrap"],
    Backend: [
      "Node.js",
      "Express.js",
      "Mongo DB",
      "MySQL",
      "Firebase"
    ],
    Programming: [
      "C",
      "C++",
      "Python",
      "Java",
      "Java Script",
      "TypeScript"      
    ],
    proficiency: [
      { name: "Full-Stack Web Dev", level: 95 },
      { name: "Machine Learning", level: 93 },
      { name: "Blockchain / Smart Contracts", level: 80 },
      { name: "UI/UX & Prototyping", level: 85 },
    ],
    Platforms: [
      "VS Code",
      "PyCharm",
      "IntelliJ IDEA",
      "Git",
      "AWS",
      "Microsoft Azure",
      "Android Studio",
    ],
    CurrentlyLearning: [
      "Rust",
      "Kubernetes",
      "Docker",
      "Web3",
      "LangChain",
      "OpenAI API",
    ],
    DevTools: [
      "Docker",
      "Postman",
      "Figma",
      "Linux",
      "GitHub Actions",
      "Webpack",
      "Vite",
    ],
  },
  
  projects: [
    {
      id: "01",
      title: "Stock Market Portfolio Management System",
      period: "AUG 2024 — SEP 2024",
      stack: ["JavaScript", "React.js", "Firebase", "Yahoo Finance API"],
      status: "DEPLOYED",
      bullets: [
        "Full-stack tracking platform for stocks, ETFs and mutual funds with real-time data integration and scalable architecture.",
        "Integrated Yahoo Finance via RapidAPI — 500+ daily requests, sub-2s latency, efficient client-side state management.",
        "High-performance analytics dashboard (P/L, allocation, trends) with Firestore queries optimized under 500ms.",
      ],
    },
    {
      id: "02",
      title: "Skin Type Classification System",
      period: "FEB 2025 — MAR 2025",
      stack: ["Python", "TensorFlow", "NumPy", "OpenCV", "JavaScript"],
      status: "DEPLOYED",
      bullets: [
        "CNN-based computer vision pipeline classifying skin types from facial images — 89% accuracy on held-out test set.",
        "Robust data pipeline: 5,000+ images with augmentation, normalization, and feature engineering.",
        "Recommendation engine translating model outputs into personalized skincare routines — end-to-end ML deployment.",
      ],
    },
    {
      id: "03",
      title: "Blockchain-Based Patent Management System",
      period: "SEP 2025 — OCT 2025",
      stack: ["Solidity", "Smart Contracts", "Hardhat", "Ethereum"],
      status: "DEPLOYED",
      bullets: [
        "Decentralized patent registry on Ethereum — tamper-proof ownership tracking with timestamped on-chain verification.",
        "Merkle tree-based validation ensuring data integrity with minimized on-chain storage overhead.",
        "95% unit test coverage on Ethereum testnet; gas optimized to ~150k per transaction.",
      ],
    },
  ],
blogs: [
  {
    id: "01",
    title: "How Does Spotify Know Your Music Taste?",
    tagline: "A system-level breakdown of the recommendation engine behind 100 million tracks and 600 million users.",
    tag: "ARTICLE",
    date: "25th April 2026",
    readTime: "6 MIN READ",
    coverImage: "/blogs/spotify.webp", // drop your image in /public/blogs/
    link: "https://darakarthikeya.medium.com/how-does-spotify-know-your-music-taste-71f01481ef83",
  },
  {
    id: "02",
    title: "Why is Agentic AI the Next Big Thing!",
    tagline: "Why I believe Agentic AI will outcompete everything else: it doesn’t just follow instructions, it thinks, adapts, and acts autonomously—continuously improving, scaling effortlessly, and redefining how work gets done.",
    tag: "ARTICLE",
    date: "25th April 2026",
    readTime: "8 MIN READ",
    coverImage: "/blogs/AI.webp",
    link: "https://darakarthikeya.medium.com/how-does-spotify-know-your-music-taste-71f01481ef83",
  },
],
  socials: {
  github: "https://github.com/Karthikeya0008",
  linkedin: "https://www.linkedin.com/in/dara-karthikeya-572b78281/",
  twitter: "https://x.com/karthikeya_dara?s=21",
  instagram: "https://www.instagram.com/karthikeya_dara/?hl=en",
  spotify: "https://open.spotify.com/user/31cpmasiwvlnh42po4yyxzl4dobq?si=caeca7d036814d7f",
  medium: "https://medium.com/@darakarthikeya",
},
  work: [
    {
      role: "AI & ML Development Intern",
      org: "Tata Consultancy Services, Kolkata",
      period: "MAY 2026 - JUL 2026",
      bullets: [
        "Built AI-powered solutions to solve practical problems, translating ideas into functional prototypes.",
        "Designed and trained models for tasks such as NLP/computer vision, achieving reliable real-world performance.",
        "Created user-facing prototypes integrating AI features into applications & Iterated on models based on feedback and evaluation metrics to enhance usability and accuracy.",
      ],
      tags: ["LLM Models","Algorithm Analysis", "System Design"],
      logo: "/logos/tcs.png",
      desc: "Summer Internship",
    },
    {
      role: "Marketing & Design Executive",
      org: "Entrepreneurship Cell, VIT Vellore",
      period: "SEP 2024 — MAR 2026",
      bullets: [
        "Led and managed a team of 30+ volunteers executing integrated multi-platform outreach campaigns using zero-budget organic marketing strategies.",
        "Drove 6,000+ attendees to flagship events including E-Summit'25, Futurepreneurs 10.0, and Pioneira.",
        "Designed and prototyped the E-Summit website UI using Figma, and spearheaded marketing across multiple social platforms.",
      ],
      tags: ["Team Leadership","Digital Marketing", "Event Management", "Social Media Management"],
      logo: "/logos/ecell.png",
      desc: "Full-Time"
    },
  ],
  education: [
    {
      institution: "Vellore Institute of Technology, Vellore",
      degree: "Integrated M.Tech — Computer Science & Engineering",
      sub: "Collaboration with Virtusa",
      period: "AUG 2023 — JUL 2028",
      score: "CGPA 8.89 / 10",
      active: true,
      logo: "/logos/vit.webp",
    },
    {
      institution: "FIITJEE Junior College, Saifabad",
      sub: "Intermediate Public Examination",
      degree: "Telanagna State Board of Secondary Education",
      period: "JUN 2021 — APR 2023",
      score: "Percentage 80.5%",
      active: false,
      logo: "/logos/fiitjee.webp",
    },
    {
      institution: "Jubilee Hills Public School, Jubilee Hills",
      sub: "All India Secondary School Examination",
      degree: "Central Board of Secondary Education",
      period: "MAY 2011 — APR 2021",
      score: "Percentage 89.0%",
      active: false,
      logo: "/logos/jhps.jpg",
    },
  ],

};
