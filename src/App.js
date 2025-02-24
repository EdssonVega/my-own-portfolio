import './App.css';
import HeroSection from './components/Hero/Hero';

import NavbarSection from './components/navbar/Navbar';
/*
import HeroSection from './components/Hero/Hero';
import AboutMeSection from './components/AboutMe/AboutMe';
import ProjectSection from './components/Projects/Projects';
import ContactMeSection from './components/ContactMe/ContactMe';
import ExperienceSection from './components/Experience/Experience';
*/

function App() {
  return (
    <div className="App">
      <NavbarSection />
      <HeroSection />
    </div>
  );
}

export default App;