import './App.css';
import AboutMeSection from './components/AboutMe/AboutMe';
import ContactMeSection from './components/ContactMe/ContactMe';
import ExperienceSection from './components/Experience/Experience';
import HeroSection from './components/Hero/Hero';
import NavbarSection from './components/navbar/Navbar';
import ProjectSection from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactMeSection />
    </div>
  );
}

export default App;