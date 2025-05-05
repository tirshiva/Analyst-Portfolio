import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
// import DynamicBackground from './components/DynamicBackground'; // Optional: comment out for Apple style

const App = () => (
  <div className="min-h-screen bg-apple-white text-apple-black overflow-x-hidden">
    <Navbar />
    <main className="pt-16">
      <section id="home"><Hero /></section>
      <section id="projects"><Projects /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
    </main>
  </div>
);

export default App;