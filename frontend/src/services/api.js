// API Service for MD ASADUL ISLAM Portfolio Frontend
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const fallbackProfile = {
  fullName: 'MD Asadul Islam',
  roleTitle: 'Software Engineer · Full-Stack MERN Developer',
  taglines: [
    'Full-Stack MERN Developer',
    'AI & Web Applications Engineer',
    'BSc in CSE from AUST',
    'IEEE Published AI Researcher',
    'React & Node.js Specialist',
  ],
  bio: 'Software Engineer and Full-Stack MERN Developer with a BSc in Computer Science and Engineering from Ahsanullah University of Science and Technology (AUST). Experienced in crafting scalable web applications, integrating modern AI models (like GPT-4o mini and OpenRouter), building secure RESTful microservices, and conducting machine learning research with first-author IEEE publication.',
  email: 'asadulislam.dev@gmail.com',
  phone: '+880 1XXXXXXXXX',
  location: 'Dhaka, Bangladesh',
  yearsOfExperience: 1,
  completedProjects: 12,
  happyClients: 8,
  socialLinks: {
    github: 'https://github.com/Asadul09',
    linkedin: 'https://linkedin.com/in/asadul09',
    twitter: 'https://x.com',
    portfolio: 'https://portfolio-react-lac-eta.vercel.app',
    resume: '#',
  },
  researchPublications: [
    {
      title: 'LC Cancer Classification Using Lightweight ShuffleNetV2 & TDO-Optimized GNB With XAI',
      venue: 'IEEE Conference Publication (First Author)',
      status: 'Published',
      summary:
        'Engineered an AI-based lung and colon cancer classification framework combining lightweight ShuffleNetV2 feature extraction with TDO-optimized Gaussian Naive Bayes and Explainable AI (XAI) for clinical interpretability.',
      tags: ['ShuffleNetV2', 'Explainable AI (XAI)', 'Deep Learning', 'PyTorch', 'IEEE'],
      link: 'https://github.com/Asadul09',
    },
    {
      title: 'Intent Detection on Low-Resource Bangla via Contrastive Learning & Fine-Tuning',
      venue: 'NLP Research Project',
      status: 'Completed',
      summary:
        'Researched intent classification on low-resource Bangla and code-mixed Bangla-English text using mBERT and XLM-RoBERTa with contrastive learning and few-shot augmentation, achieving ~88.4% accuracy.',
      tags: ['Bangla NLP', 'XLM-RoBERTa', 'mBERT', 'Contrastive Learning', 'Transformers'],
      link: 'https://github.com/Asadul09',
    },
  ],
  experiences: [
    {
      role: 'Data Analyst',
      company: 'Sunset Kuakata Hotel & Resort Ltd.',
      period: 'August 2024 - Present',
      location: 'Dhaka, Bangladesh',
      description:
        'Spearheaded CRM database operations, automated analytical Excel workflows, evaluated sales KPIs, and built interactive Power BI business intelligence dashboards for executive decision-making.',
      technologies: ['Power BI', 'Excel Advanced', 'CRM Analytics', 'Data Modeling', 'KPI Tracking'],
    },
    {
      role: 'Full-Stack MERN Developer',
      company: 'Independent & Academic Projects',
      period: 'December 2021 - Present',
      location: 'Dhaka, Bangladesh',
      description:
        'Architected end-to-end web applications including VivaBot.AI (AI interview preparation platform) and healthcare management portals. Built secure REST APIs, implemented JWT and Firebase authentication, and designed responsive Tailwind CSS interfaces.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Tailwind CSS'],
    },
  ],
  education: [
    {
      degree: 'BSc in Computer Science and Engineering (CSE)',
      institution: 'Ahsanullah University of Science and Technology (AUST)',
      period: 'December 2021 - December 2025',
      details: 'Graduated in CSE. Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks, and Machine Learning.',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Science Division',
      period: 'Graduated',
      details: 'GPA: 5.00 / 5.00 in Science stream with top academic honors.',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Science Division',
      period: 'Graduated',
      details: 'GPA: 5.00 / 5.00 with perfect grade record.',
    },
  ],
};

export const fallbackProjects = [
  {
    _id: '1',
    title: 'VivaBot.AI - AI Interview Prep Platform',
    category: 'Full Stack',
    description:
      'A comprehensive AI-powered interview preparation ecosystem. Features real-time AI interview question generation, intelligent resume analysis, simulated live interview sessions, automated scoring & detailed feedback, downloadable PDF performance reports, and user credit balance system.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OpenRouter', 'GPT-4o mini', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://vivabot-lake.vercel.app',
    githubUrl: 'https://github.com/Asadul09/VIVABOT',
    featured: true,
  },
  {
    _id: '2',
    title: 'Better Life Hospital Management System',
    category: 'Full Stack',
    description:
      'Modern healthcare administration system featuring patient appointment booking, doctor directory, departmental schedules, clinical record management, and responsive medical consultation portal.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09/Better-Life-Hospital',
    githubUrl: 'https://github.com/Asadul09/Better-Life-Hospital',
    featured: true,
  },
  {
    _id: '3',
    title: 'Smart IoT Healthcare Monitoring System',
    category: 'Full Stack',
    description:
      'Connected telemedicine IoT prototype featuring ESP32 microcontroller integration, continuous wireless ECG telemetry, heart rate anomaly alerts, and real-time biometric dashboards.',
    tags: ['ESP32', 'Node.js', 'WebSockets', 'C++', 'MongoDB', 'IoT Sensors', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09',
    githubUrl: 'https://github.com/Asadul09',
    featured: true,
  },
  {
    _id: '4',
    title: 'LC Cancer Classification with XAI (IEEE Research)',
    category: 'Full Stack',
    description:
      'First-author research application for automated histopathological cancer classification using lightweight ShuffleNetV2 and TDO-optimized Gaussian Naive Bayes, backed by Explainable AI heatmaps for diagnostic validation.',
    tags: ['Python', 'PyTorch', 'ShuffleNetV2', 'Explainable AI', 'IEEE', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09',
    githubUrl: 'https://github.com/Asadul09',
    featured: true,
  },
  {
    _id: '5',
    title: 'TV Room 3D - Architectural Visualization',
    category: 'Frontend',
    description:
      'Interactive WebGL and 3D computer graphics room walkthrough. Enables users to inspect interior lighting, textures, camera angles, and furniture arrangements directly in the browser.',
    tags: ['React.js', 'Three.js', 'WebGL', 'JavaScript', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09/tv-room-3d',
    githubUrl: 'https://github.com/Asadul09/tv-room-3d',
    featured: false,
  },
  {
    _id: '6',
    title: 'Live Weather Forecasting Application',
    category: 'Frontend',
    description:
      'Dynamic weather dashboard providing current meteorological conditions, 7-day extended forecasts, humidity tracking, UV index indicators, and geolocation lookup.',
    tags: ['React.js', 'Tailwind CSS', 'OpenWeather API', 'Vite'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09/weather-app',
    githubUrl: 'https://github.com/Asadul09/weather-app',
    featured: false,
  },
  {
    _id: '7',
    title: 'Automated RFID Toll Collection System',
    category: 'Backend',
    description:
      'Smart highway toll plaza automation architecture using RFID vehicle tag recognition, automated electronic account billing, gate barrier triggers, and transaction logging.',
    tags: ['Node.js', 'Express.js', 'RFID Protocol', 'MySQL', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09',
    githubUrl: 'https://github.com/Asadul09',
    featured: false,
  },
  {
    _id: '8',
    title: 'Bangla Intent Detection & NLP Framework',
    category: 'Backend',
    description:
      'Natural Language Processing pipeline evaluating intent detection on low-resource Bangla and code-mixed Bangla-English text using mBERT and XLM-RoBERTa with contrastive learning (~88.4% accuracy).',
    tags: ['Python', 'XLM-RoBERTa', 'mBERT', 'PyTorch', 'Transformers', 'NLP'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09',
    githubUrl: 'https://github.com/Asadul09',
    featured: false,
  },
];

export const fallbackSkills = [
  // Frontend
  { name: 'React.js', category: 'Frontend', proficiency: 92, iconName: 'Atom', featured: true },
  { name: 'JavaScript (ES6+)', category: 'Frontend', proficiency: 95, iconName: 'FileCode2', featured: true },
  { name: 'TypeScript', category: 'Frontend', proficiency: 85, iconName: 'FileCode', featured: true },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 92, iconName: 'Palette', featured: true },
  { name: 'HTML5 & CSS3', category: 'Frontend', proficiency: 95, iconName: 'Layout', featured: false },
  { name: 'Bootstrap', category: 'Frontend', proficiency: 88, iconName: 'Palette', featured: false },

  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 90, iconName: 'Server', featured: true },
  { name: 'Express.js', category: 'Backend', proficiency: 90, iconName: 'Layers', featured: true },
  { name: 'RESTful API Architecture', category: 'Backend', proficiency: 92, iconName: 'Network', featured: true },
  { name: 'JWT & Authentication', category: 'Backend', proficiency: 88, iconName: 'KeyRound', featured: true },
  { name: 'Firebase Authentication', category: 'Backend', proficiency: 84, iconName: 'Zap', featured: false },
  { name: 'PHP & C# Basics', category: 'Backend', proficiency: 76, iconName: 'Terminal', featured: false },

  // Database
  { name: 'MongoDB & Atlas', category: 'Database', proficiency: 90, iconName: 'Database', featured: true },
  { name: 'Mongoose ODM', category: 'Database', proficiency: 92, iconName: 'Binary', featured: true },
  { name: 'SQL & Relational DBs', category: 'Database', proficiency: 82, iconName: 'Table', featured: false },

  // AI & Data Analytics
  { name: 'Python (ML / NLP)', category: 'Tools & DevOps', proficiency: 86, iconName: 'Terminal', featured: true },
  { name: 'Power BI & Excel Dashboards', category: 'Tools & DevOps', proficiency: 88, iconName: 'Layout', featured: true },
  { name: 'AI API Integration (OpenRouter/GPT)', category: 'Tools & DevOps', proficiency: 90, iconName: 'Zap', featured: true },

  // Tools & DevOps
  { name: 'Git & GitHub', category: 'Tools & DevOps', proficiency: 92, iconName: 'GitBranch', featured: true },
  { name: 'Postman (API Testing)', category: 'Tools & DevOps', proficiency: 90, iconName: 'Terminal', featured: false },
  { name: 'Vite & Build Tools', category: 'Tools & DevOps', proficiency: 88, iconName: 'Boxes', featured: false },
  { name: 'Figma & UI Prototyping', category: 'Tools & DevOps', proficiency: 80, iconName: 'Palette', featured: false },
];

export const fetchProfile = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/profile`);
    if (!res.ok) throw new Error('Failed to fetch profile');
    const data = await res.json();
    return data.data || fallbackProfile;
  } catch (err) {
    console.warn('Using fallback profile data:', err.message);
    return fallbackProfile;
  }
};

export const fetchProjects = async (category = '') => {
  try {
    const query = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : '';
    const res = await fetch(`${API_BASE_URL}/projects${query}`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    const data = await res.json();
    return data.data || fallbackProjects;
  } catch (err) {
    console.warn('Using fallback projects data:', err.message);
    if (category && category !== 'All') {
      return fallbackProjects.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }
    return fallbackProjects;
  }
};

export const fetchSkills = async (category = '') => {
  try {
    const query = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : '';
    const res = await fetch(`${API_BASE_URL}/skills${query}`);
    if (!res.ok) throw new Error('Failed to fetch skills');
    const data = await res.json();
    return data.data || fallbackSkills;
  } catch (err) {
    console.warn('Using fallback skills data:', err.message);
    if (category && category !== 'All') {
      return fallbackSkills.filter(
        (s) => s.category.toLowerCase() === category.toLowerCase()
      );
    }
    return fallbackSkills;
  }
};

export const sendContactMessage = async (formPayload) => {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formPayload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Failed to send message');
  }
  return data;
};

export const checkBackendHealth = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    if (!res.ok) return { connected: false, message: 'Backend unreachable' };
    return await res.json();
  } catch {
    return { connected: false, message: 'Backend offline' };
  }
};
