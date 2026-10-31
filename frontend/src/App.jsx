import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profileData, projectsData, skillsData } from './data/portfolio';

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <Navbar profile={profileData} />
      <main>
        <Hero profile={profileData} />
        <About profile={profileData} />
        <Skills skills={skillsData} />
        <Projects projects={projectsData} />
        <Research profile={profileData} />
        <Experience profile={profileData} />
        <Contact profile={profileData} />
      </main>
      <Footer profile={profileData} />
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
