import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  fetchProfile,
  fetchProjects,
  fetchSkills,
  checkBackendHealth,
  fallbackProfile,
  fallbackProjects,
  fallbackSkills,
} from './services/api';

function PortfolioApp() {
  const [profile, setProfile] = useState(fallbackProfile);
  const [projects, setProjects] = useState(fallbackProjects);
  const [skills, setSkills] = useState(fallbackSkills);
  const [health, setHealth] = useState({ connected: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        const [profileData, projectsData, skillsData, healthData] = await Promise.all([
          fetchProfile(),
          fetchProjects(),
          fetchSkills(),
          checkBackendHealth(),
        ]);

        if (profileData) setProfile(profileData);
        if (projectsData) setProjects(projectsData);
        if (skillsData) setSkills(skillsData);
        if (healthData) setHealth(healthData);
      } catch (err) {
        console.error('Data loading error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <Navbar health={health} profile={profile} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience profile={profile} />
        <Contact profile={profile} health={health} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
