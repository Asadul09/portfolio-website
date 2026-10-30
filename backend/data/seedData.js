export const seedProfile = {
  fullName: 'Alex Rivera',
  roleTitle: 'Full Stack MERN Developer',
  taglines: [
    'MERN Stack Specialist',
    'React & Node.js Engineer',
    'REST & GraphQL Architect',
    'Clean Code Advocate',
  ],
  bio: 'I build resilient, user-centric web applications with end-to-end type safety, modern microservices, and pixel-perfect responsive interfaces. Passionate about solving complex problems and turning ideas into impactful digital products.',
  email: 'alex.rivera.dev@gmail.com',
  phone: '+1 (555) 789-0123',
  location: 'San Francisco, CA / Remote',
  yearsOfExperience: 3,
  completedProjects: 24,
  happyClients: 15,
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    resume: '#',
  },
  experiences: [
    {
      role: 'Full Stack Software Engineer',
      company: 'TechFlow Solutions',
      period: '2023 - Present',
      location: 'Remote',
      description:
        'Architected and deployed scalable full-stack features using React, Node.js, and MongoDB Atlas. Reduced API latency by 35% through indexing and Redis caching.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Docker'],
    },
    {
      role: 'Frontend Developer',
      company: 'PixelCraft Studio',
      period: '2022 - 2023',
      location: 'San Francisco, CA',
      description:
        'Built responsive web applications and interactive client portals. Collaborated with UI/UX designers to translate Figma prototypes into accessible, component-driven interfaces.',
      technologies: ['React', 'JavaScript (ES6+)', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs'],
    },
    {
      role: 'Junior Web Developer',
      company: 'Nexus Creative',
      period: '2021 - 2022',
      location: 'San Jose, CA',
      description:
        'Developed internal dashboard modules, maintained RESTful endpoints in Express, and implemented automated end-to-end tests.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'HTML5/CSS3', 'Git'],
    },
  ],
  education: [
    {
      degree: 'B.S. in Computer Science',
      institution: 'State University of California',
      period: '2017 - 2021',
      details: 'Focus on Distributed Systems, Software Engineering, and Database Design.',
    },
    {
      degree: 'Full-Stack Web Development Bootcamp',
      institution: 'General Assembly',
      period: '2021',
      details: 'Intensive 500+ hours project-based curriculum covering modern MERN architecture.',
    },
  ],
};

export const seedProjects = [
  {
    title: 'CloudSync - Collaborative Task Platform',
    category: 'Full Stack',
    description:
      'A real-time workspace collaboration tool with drag-and-drop Kanban boards, team permissions, live notifications, and detailed activity tracking.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Socket.io', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com/demo/cloudsync',
    githubUrl: 'https://github.com/example/cloudsync',
    featured: true,
    order: 1,
  },
  {
    title: 'DevPulse - Developer Social Network & Code Snippets',
    category: 'Full Stack',
    description:
      'A developer community app allowing engineers to share verified code snippets, write tech blogs with markdown preview, and upvote solutions.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Prism.js'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com/demo/devpulse',
    githubUrl: 'https://github.com/example/devpulse',
    featured: true,
    order: 2,
  },
  {
    title: 'ShopSphere - Modern E-Commerce Platform',
    category: 'Full Stack',
    description:
      'Full-featured online store with Stripe payment gateway integration, product filtering, user reviews, order management, and admin dashboard.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Redux'],
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com/demo/shopsphere',
    githubUrl: 'https://github.com/example/shopsphere',
    featured: true,
    order: 3,
  },
  {
    title: 'CryptoMetrics - Financial Analytics Dashboard',
    category: 'Frontend',
    description:
      'Interactive cryptocurrency and stock market visualization dashboard with live candlesticks, price alerts, and portfolio tracking.',
    tags: ['React', 'Tailwind CSS', 'Chart.js', 'CoinGecko API', 'Vite'],
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com/demo/cryptometrics',
    githubUrl: 'https://github.com/example/cryptometrics',
    featured: false,
    order: 4,
  },
  {
    title: 'Restify - Scalable API Gateway & Rate Limiter',
    category: 'Backend',
    description:
      'Lightweight Node.js microservice reverse proxy featuring token bucket rate-limiting, request caching, and health diagnostics.',
    tags: ['Node.js', 'Express', 'Redis', 'Docker', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com/demo/restify',
    githubUrl: 'https://github.com/example/restify',
    featured: false,
    order: 5,
  },
  {
    title: 'FitTrack - AI Workout & Nutrition Companion',
    category: 'Full Stack',
    description:
      'Personalized fitness planner generating daily workout routines, caloric targets, and visual progress charts with habit streaks.',
    tags: ['React', 'Express', 'MongoDB Atlas', 'Tailwind CSS', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com/demo/fittrack',
    githubUrl: 'https://github.com/example/fittrack',
    featured: false,
    order: 6,
  },
];

export const seedSkills = [
  // Frontend
  { name: 'React.js', category: 'Frontend', proficiency: 92, iconName: 'Atom', featured: true },
  { name: 'JavaScript (ES6+)', category: 'Frontend', proficiency: 95, iconName: 'FileCode2', featured: true },
  { name: 'TypeScript', category: 'Frontend', proficiency: 85, iconName: 'FileCode', featured: true },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 90, iconName: 'Palette', featured: true },
  { name: 'HTML5 / Modern CSS', category: 'Frontend', proficiency: 95, iconName: 'Layout', featured: false },
  { name: 'Redux / Zustand', category: 'Frontend', proficiency: 82, iconName: 'Cpu', featured: false },

  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 90, iconName: 'Server', featured: true },
  { name: 'Express.js', category: 'Backend', proficiency: 88, iconName: 'Layers', featured: true },
  { name: 'RESTful API Architecture', category: 'Backend', proficiency: 92, iconName: 'Network', featured: true },
  { name: 'JWT & Authentication', category: 'Backend', proficiency: 86, iconName: 'KeyRound', featured: false },
  { name: 'Socket.io / WebSockets', category: 'Backend', proficiency: 78, iconName: 'Radio', featured: false },

  // Database
  { name: 'MongoDB & Atlas', category: 'Database', proficiency: 88, iconName: 'Database', featured: true },
  { name: 'Mongoose ODM', category: 'Database', proficiency: 90, iconName: 'Binary', featured: true },
  { name: 'Redis Caching', category: 'Database', proficiency: 75, iconName: 'Zap', featured: false },
  { name: 'PostgreSQL Basics', category: 'Database', proficiency: 70, iconName: 'Table', featured: false },

  // Tools & DevOps
  { name: 'Git & GitHub', category: 'Tools & DevOps', proficiency: 90, iconName: 'GitBranch', featured: true },
  { name: 'Docker Containers', category: 'Tools & DevOps', proficiency: 75, iconName: 'Container', featured: false },
  { name: 'Vite & Webpack', category: 'Tools & DevOps', proficiency: 85, iconName: 'Boxes', featured: false },
  { name: 'Postman / API Testing', category: 'Tools & DevOps', proficiency: 88, iconName: 'Terminal', featured: false },
  { name: 'Vercel / Render / Cloud', category: 'Tools & DevOps', proficiency: 84, iconName: 'Cloud', featured: false },
];
