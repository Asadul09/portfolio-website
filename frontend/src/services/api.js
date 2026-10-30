// API Service for MD ASADUL ISLAM - AI Developer Portfolio
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const fallbackProfile = {
  fullName: 'MD Asadul Islam',
  roleTitle: 'Full-Stack AI Developer & Software Engineer',
  taglines: [
    'Full-Stack AI Developer',
    'LLM & Agentic Systems Engineer',
    'AI-Powered Web Applications',
    'IEEE Published AI Researcher',
    'Creator of VivaBot.AI',
  ],
  bio: 'Software Engineer and AI Developer with a BSc in Computer Science and Engineering from Ahsanullah University of Science and Technology (AUST). Experienced in architecting intelligent applications, integrating modern foundation models (GPT-4o mini, OpenRouter, Claude), building high-throughput MERN platforms, and conducting machine learning research with first-author IEEE publication.',
  email: 'asadut486@gmail.com',
  phone: '+880 1XXXXXXXXX',
  location: 'Dhaka, Bangladesh',
  yearsOfExperience: 1,
  completedProjects: 12,
  happyClients: 8,
  socialLinks: {
    github: 'https://github.com/Asadul09',
    linkedin: 'https://www.linkedin.com/in/a-j-asad-408839270/',
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
      role: 'Full-Stack AI Developer',
      company: 'Independent & Academic Projects',
      period: 'December 2021 - Present',
      location: 'Dhaka, Bangladesh',
      description:
        'Architected end-to-end intelligent applications including VivaBot.AI (AI interview preparation platform) and healthcare management portals. Built secure REST APIs, implemented JWT and Firebase authentication, and designed responsive Tailwind CSS interfaces.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenRouter', 'GPT-4o mini', 'Tailwind CSS'],
    },
  ],
  education: [
    {
      degree: 'BSc in Computer Science and Engineering (CSE)',
      institution: 'Ahsanullah University of Science and Technology (AUST)',
      period: 'December 2021 - December 2025',
      details: 'Graduated in CSE. Coursework: Artificial Intelligence, Machine Learning, Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks.',
    },
  ],
};

export const fallbackProjects = [
  {
    _id: '1',
    title: 'VivaBot.AI - AI Interview Prep Platform',
    category: 'AI & Machine Learning',
    description:
      'Comprehensive AI-powered interview preparation platform. Generates real-time AI interview questions, analyzes resumes, conducts simulated live voice/text sessions, evaluates answers with automated scoring rubrics, and exports downloadable performance PDF reports.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OpenRouter', 'GPT-4o mini', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://vivabot-lake.vercel.app',
    githubUrl: 'https://github.com/Asadul09/VIVABOT',
    featured: true,
  },
  {
    _id: '2',
    title: 'Smart IoT Healthcare - Vital Sign Tracking & ECG Arrhythmia Detection',
    category: 'AI & Machine Learning',
    description:
      'Connected telemedicine IoT prototype featuring ESP32 microcontroller integration, continuous wireless ECG telemetry, heart rate anomaly alerts, arrhythmia pattern recognition, and real-time biometric charts.',
    tags: ['ESP32', 'Node.js', 'WebSockets', 'C++', 'MongoDB', 'IoT Sensors', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09/Smart-IoT-Healthcare-Real-Time-Vital-Sign-Tracking-and-ECG-Arrhythmia-Detection',
    githubUrl: 'https://github.com/Asadul09/Smart-IoT-Healthcare-Real-Time-Vital-Sign-Tracking-and-ECG-Arrhythmia-Detection',
    featured: true,
  },
  {
    _id: '3',
    title: 'EventHex - Event Discovery & Ticketing Platform',
    category: 'Full Stack',
    description:
      'Full-stack event discovery, reservation, and management platform with interactive event catalogs, ticket booking workflows, real-time schedule tracking, and organizer admin dashboards.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09/EventHex',
    githubUrl: 'https://github.com/Asadul09/EventHex',
    featured: true,
  },
  {
    _id: '4',
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
    _id: '5',
    title: 'Hospital Management System (PHP & MySQL)',
    category: 'Backend',
    description:
      'Full clinical management application developed with PHP and MySQL relational database, featuring doctor/patient appointment coordination, billing receipts, and patient history auditing.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Relational DB', 'HTML/CSS'],
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09/Hospital-Management-System',
    githubUrl: 'https://github.com/Asadul09/Hospital-Management-System',
    featured: false,
  },
  {
    _id: '6',
    title: 'Automated RFID Toll Collection System',
    category: 'Backend',
    description:
      'Smart highway toll plaza automation architecture using RFID vehicle tag recognition, automated electronic account billing, gate barrier triggers, and transaction logging.',
    tags: ['Node.js', 'RFID Protocol', 'MySQL', 'C++', 'Hardware Interfacing'],
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09/Automated-Toll-Collection-System-',
    githubUrl: 'https://github.com/Asadul09/Automated-Toll-Collection-System-',
    featured: false,
  },
  {
    _id: '7',
    title: 'Exam Enrollment System',
    category: 'Full Stack',
    description:
      'Academic examination registration and course enrollment portal with student credential validation, fee confirmation, seat plan generation, and administrator examination auditing.',
    tags: ['Full Stack', 'Database Management', 'Authentication', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09/Exam-Enrollment-System',
    githubUrl: 'https://github.com/Asadul09/Exam-Enrollment-System',
    featured: false,
  },
  {
    _id: '8',
    title: 'Zombie Attack - C++ Computer Graphics Game',
    category: 'Frontend',
    description:
      'Action survival 2D arcade game built in C++ using the iGraphics library. Implemented custom sprite rendering, projectile physics, zombie collision detection, and score tracking.',
    tags: ['C++', 'iGraphics', 'Computer Graphics', 'Game Physics', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09/Zombie-Attack-i-graphics-project',
    githubUrl: 'https://github.com/Asadul09/Zombie-Attack-i-graphics-project',
    featured: false,
  },
  {
    _id: '9',
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
    _id: '10',
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
    _id: '11',
    title: 'React Portfolio Website',
    category: 'Frontend',
    description:
      'Modern responsive developer portfolio engineered with React 19, Tailwind CSS, and full MERN API integration showcasing full-stack AI projects and IEEE research.',
    tags: ['React 19', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://portfolio-react-lac-eta.vercel.app',
    githubUrl: 'https://github.com/Asadul09/portfolio_react',
    featured: false,
  },
  {
    _id: '12',
    title: 'LC Cancer Classification with XAI (IEEE Research)',
    category: 'AI & Machine Learning',
    description:
      'First-author research application for automated histopathological cancer classification using lightweight ShuffleNetV2 and TDO-optimized Gaussian Naive Bayes, backed by Explainable AI heatmaps for diagnostic validation.',
    tags: ['Python', 'PyTorch', 'ShuffleNetV2', 'Explainable AI', 'IEEE', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://github.com/Asadul09',
    githubUrl: 'https://github.com/Asadul09',
    featured: true,
  },
];

export const fallbackSkills = [
  // AI & Machine Learning
  { name: 'LLMs & Prompt Engineering (GPT-4o, OpenRouter)', category: 'AI & Machine Learning', proficiency: 94, iconName: 'BrainCircuit', featured: true },
  { name: 'Deep Learning & PyTorch', category: 'AI & Machine Learning', proficiency: 88, iconName: 'Cpu', featured: true },
  { name: 'Explainable AI (XAI) & ShuffleNetV2', category: 'AI & Machine Learning', proficiency: 90, iconName: 'Sparkles', featured: true },
  { name: 'NLP & Transformers (mBERT, XLM-R)', category: 'AI & Machine Learning', proficiency: 86, iconName: 'Bot', featured: true },
  { name: 'Python (ML, Data Science, AI APIs)', category: 'AI & Machine Learning', proficiency: 92, iconName: 'Terminal', featured: true },

  // Frontend
  { name: 'React.js 19 & Vite', category: 'Frontend', proficiency: 92, iconName: 'Atom', featured: true },
  { name: 'JavaScript (ES6+) & TypeScript', category: 'Frontend', proficiency: 94, iconName: 'FileCode2', featured: true },
  { name: 'Tailwind CSS & Modern UI', category: 'Frontend', proficiency: 92, iconName: 'Palette', featured: true },
  { name: 'HTML5 & Modern CSS', category: 'Frontend', proficiency: 95, iconName: 'Layout', featured: false },

  // Backend
  { name: 'Node.js & Express.js', category: 'Backend', proficiency: 90, iconName: 'Server', featured: true },
  { name: 'RESTful API & Microservices', category: 'Backend', proficiency: 92, iconName: 'Layers', featured: true },
  { name: 'JWT & Firebase Authentication', category: 'Backend', proficiency: 88, iconName: 'KeyRound', featured: false },
  { name: 'WebSockets & Telemetry', category: 'Backend', proficiency: 82, iconName: 'Network', featured: false },
  { name: 'PHP & MySQL Backends', category: 'Backend', proficiency: 80, iconName: 'Terminal', featured: false },

  // Database
  { name: 'MongoDB & Atlas (Mongoose)', category: 'Database', proficiency: 90, iconName: 'Database', featured: true },
  { name: 'SQL & Relational DBs', category: 'Database', proficiency: 82, iconName: 'Table', featured: false },

  // Tools & Analytics
  { name: 'Power BI & Executive KPI Dashboards', category: 'Tools & Analytics', proficiency: 88, iconName: 'TrendingUp', featured: true },
  { name: 'Git & GitHub Project Management', category: 'Tools & Analytics', proficiency: 92, iconName: 'GitBranch', featured: true },
  { name: 'Postman & API Diagnostics', category: 'Tools & Analytics', proficiency: 90, iconName: 'Terminal', featured: false },
  { name: 'Excel Advanced Analytics', category: 'Tools & Analytics', proficiency: 88, iconName: 'Layout', featured: false },
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
