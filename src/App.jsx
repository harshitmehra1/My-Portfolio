import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Education from './sections/Education';


function App() {
  return (
    // <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', paddingTop: '80px' }}>
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
     
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education/>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
