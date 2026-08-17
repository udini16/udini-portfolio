import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)', marginTop: '5rem' }}>
        <p>&copy; {new Date().getFullYear()} Muhammad Izzuddin. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
