import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import Skills from './components/Skills'
import Honors from './components/Honors';
import Certs from './components/Projects';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
    useEffect(() => {
      document.title = "Seun Alabi - Cloud & DevOps Engineer Portfolio";
      AOS.init();
    }, []);
  return (
    <div className="relative bg-[#0a0a0a] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hiro />
      <About/>
      <Projects />
      <Skills />
      <Honors />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
