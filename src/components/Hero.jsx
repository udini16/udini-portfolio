import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const statuses = ['STATUS: HEALTHY', 'STATUS: INFECTION RISK', 'STATUS: SURVIVING'];

export default function Hero() {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="container hero-full-layout">
        
        {/* Left Side: Visuals / Avatars as Pinned Photos */}
        <div className="hero-visuals">
           <motion.div 
             className="polaroid"
             initial={{ opacity: 0, rotate: -10, x: -50 }}
             animate={{ opacity: 1, rotate: -5, x: 0 }}
             transition={{ duration: 0.6, type: 'spring' }}
           >
             <div className="polaroid-img-wrapper">
               <img src="/avatar.png" alt="Player Character" />
             </div>
             <div className="polaroid-caption">UDINI - ALIVE</div>
             <div className="tape"></div>
           </motion.div>
           
           <motion.div 
             className="polaroid zombified"
             initial={{ opacity: 0, rotate: 10, x: 50 }}
             animate={{ opacity: 1, rotate: 8, x: 0 }}
             transition={{ duration: 0.6, type: 'spring', delay: 0.2 }}
           >
             <div className="polaroid-img-wrapper">
               <img src="/zombie_avatar.png" alt="Zombified Character" style={{ transform: 'scaleX(-1)' }} />
             </div>
             <div className="polaroid-caption text-alert">WARNING: INFECTED</div>
             <div className="tape"></div>
           </motion.div>
        </div>

        {/* Right Side: Main Profile Information */}
        <motion.div 
          className="dossier-panel"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="dossier-header">
            <span>// CLASSIFIED: SURVIVOR PROFILE</span>
            <span className="text-alert blinking">REC</span>
          </div>

          <h1 className="hero-name">MUHAMMAD IZZUDDIN</h1>
          
          <div className="status-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={statusIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`status-text ${statusIndex === 1 ? 'text-alert' : ''}`}
              >
                {statuses[statusIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="dossier-body">
            <p className="dossier-summary">
              A highly adaptable survivor specializing in full-stack development and AI integration. 
              Known for scavenging resources to build robust digital solutions in hostile environments.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-label">CLASS:</span>
                <span className="stat-val">Full-Stack Dev / AI / UX</span>
              </div>
              <div className="stat">
                <span className="stat-label">SKILL:</span>
                <span className="stat-val">Laravel, React, YOLOv10</span>
              </div>
              <div className="stat">
                <span className="stat-label">BASE:</span>
                <span className="stat-val">Shah Alam, MY</span>
              </div>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-dossier">
              [ ACCESS SCHEMATICS ]
            </a>
            <a href="#about" className="btn-dossier">
              [ READ LOGS ]
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-dossier">
              [ DOWNLOAD RESUME ]
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
