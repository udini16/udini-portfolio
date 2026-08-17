import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ZombieGame from './ZombieGame';
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
    <section id="home" className="hero-section" onClick={(e) => {
      // Blood splatter on background click
      const el = document.createElement('div');
      el.className = 'blood-splatter blood-active';
      el.style.left = `${e.clientX - 50}px`;
      el.style.top = `${e.clientY - 50}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2000);
    }}>
      
      {/* Interactive Zombie Game Layer */}
      <ZombieGame />

      <div className="container hero-container">
        <div className="hero-layout">
          {/* Character Avatar */}
          <motion.div 
            className="hero-avatar"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <img src="/avatar.png" alt="Player Character" />
          </motion.div>

          {/* HUD Panel */}
          <motion.div 
            className="hud-panel hero-hud"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hud-header">
              <span>// SURVIVOR PROFILE</span>
              <span className="text-alert blinking">REC</span>
            </div>

            <div className="hero-content">
              <h1 className="hero-name">Muhammad Izzuddin</h1>
              
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

              <div className="hero-cta">
                <a href="#projects" className="btn-hud">
                  [ ACCESS SCHEMATICS ]
                </a>
                <a href="#about" className="btn-hud">
                  [ READ LOGS ]
                </a>
              </div>
            </div>
            <div className="hud-footer">
              <span>WARNING: INFECTED DETECTED IN AREA. CLICK TO ELIMINATE.</span>
            </div>
          </motion.div>

          {/* Zombified Avatar (Right) */}
          <motion.div 
            className="hero-avatar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: 'spring', delay: 0.4 }}
          >
            <img src="/zombie_avatar.png" alt="Zombified Character" style={{ transform: 'scaleX(-1)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
