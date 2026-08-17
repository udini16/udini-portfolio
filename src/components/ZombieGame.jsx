import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ZombieGame.css';

const LOOT_POOL = [
  { type: 'Intel', text: 'Full Stack Dev Intern @ Aptronics' },
  { type: 'Skill', text: 'React & Vite Mastery' },
  { type: 'Item', text: 'MuhammadIzzuddin_Resume.pdf' },
  { type: 'Intel', text: 'Degree in Computer Science (CGPA: 3.5)' },
  { type: 'Skill', text: 'Project Zomboid UI Design' },
  { type: 'Intel', text: 'AI & UX Enthusiast' }
];

export default function ZombieGame() {
  const [zombies, setZombies] = useState([]);
  const [lootDrops, setLootDrops] = useState([]);
  const containerRef = useRef(null);

  // Spawner
  useEffect(() => {
    const spawnZombie = () => {
      if (!containerRef.current) return;
      const id = Date.now();
      const top = Math.random() * 80 + 10; // 10% to 90% height
      const speed = Math.random() * 10 + 15; // 15s to 25s to cross screen
      
      setZombies(prev => [...prev, { id, top, speed, dead: false }]);
    };

    const interval = setInterval(spawnZombie, 4000); // Spawn every 4s
    spawnZombie(); // Initial spawn

    return () => clearInterval(interval);
  }, []);

  const handleKill = (id, e) => {
    e.stopPropagation();
    
    // Play hit sound
    const audio = new Audio('/hit.wav');
    audio.volume = 0.4;
    audio.play().catch(err => console.log('Audio error:', err));
    
    // Update zombie to dead state
    setZombies(prev => prev.map(z => z.id === id ? { ...z, dead: true } : z));
    
    // Drop loot
    const lootItem = LOOT_POOL[Math.floor(Math.random() * LOOT_POOL.length)];

    const lootId = Date.now() + Math.random();
    setLootDrops(prev => [...prev, { id: lootId, data: lootItem }]);

    // Auto remove loot after a few seconds
    setTimeout(() => {
      setLootDrops(prev => prev.filter(l => l.id !== lootId));
    }, 6000);

    // Remove zombie after a while
    setTimeout(() => {
      setZombies(prev => prev.filter(z => z.id !== id));
    }, 5000);
  };

  const removeLoot = (id) => {
    setLootDrops(prev => prev.filter(l => l.id !== id));
  };

  return (
    <div className="zombie-game-container" ref={containerRef}>
      {/* Zombies */}
      <AnimatePresence>
        {zombies.map(zombie => (
          !zombie.dead ? (
            <motion.div
              key={zombie.id}
              className="zombie"
              style={{ top: `${zombie.top}%` }}
              initial={{ left: '-10%', scaleX: 1 }}
              animate={{ left: '110%' }}
              transition={{ duration: zombie.speed, ease: 'linear' }}
              onClick={(e) => handleKill(zombie.id, e)}
              exit={{ opacity: 0 }}
            >
              <div className="zombie-sprite">🧟‍♂️</div>
            </motion.div>
          ) : (
            <motion.div
              key={zombie.id}
              className="zombie dead"
              style={{ top: `${zombie.top}%`, left: 'auto' }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 3, duration: 2 }}
            >
              <div className="blood-stain"></div>
              <div className="zombie-sprite corpse">🧟‍♂️</div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Fixed Loot Drops Log */}
      <div className="loot-log-container">
        <AnimatePresence>
          {lootDrops.map(loot => (
            <motion.div
              key={loot.id}
              className="loot-card hud-panel"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              onClick={() => removeLoot(loot.id)}
            >
              <div className="loot-header">
                <span className="loot-type">[{loot.data.type}]</span>
                <button className="loot-close">X</button>
              </div>
              <div className="loot-text">{loot.data.text}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
