import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Skill from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contacts';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
function App() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-black to-purple-950  pb-10 text-white">

      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Experience/>
      <Certifications/>
      <Project/>
      <Contact/>
   
      
    </div>
  );
}

export default App;
