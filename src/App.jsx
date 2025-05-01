import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Navbar />
        <main className="text-gray-900">
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App; 