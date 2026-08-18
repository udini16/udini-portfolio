import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'UdiniPlayer',
    category: 'MORALE BOOSTER',
    description: 'Custom Spotify web client featuring secure OAuth, themed dashboard, and listening data export.',
    image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=800', // Update with actual asset later if needed
    tags: ['React.js', 'Tailwind CSS', 'Spotify API', 'Laravel'],
    links: { github: 'https://github.com/udini16/spotify-custom-player', live: 'https://spotify-custom-player-blond.vercel.app/' }
  },
  {
    id: 2,
    title: 'Urban Tree AI',
    category: 'AI SURVIVAL TOOL',
    description: 'Semi-real-time urban tree species identification in street view images using YOLOv10.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'YOLOv10', 'Deep Learning'],
    links: { github: 'https://github.com/udini16/FYP_Tree_Identification_YOLOv10_GoogleStreetView', live: '#' }
  },
  {
    id: 3,
    title: 'Racket Arena',
    category: 'BASE MANAGEMENT',
    description: 'Sports facility booking system with secure FPX payment gateway integration.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    tags: ['Laravel', 'FPX'],
    links: { github: 'https://github.com/udini16/Racket_Arena', live: 'https://racket-arena.onrender.com' }
  },
  {
    id: 4,
    title: 'Receipt AI Scanner',
    category: 'INTEL GATHERING',
    description: 'Automated data extraction tool for analyzing and storing receipt information.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    tags: ['Laravel', 'Tesseract OCR'],
    links: { github: 'https://github.com/udini16/OCR-Receipt-Invoice-Scanner', live: '#' }
  },
  {
    id: 5,
    title: 'Recycle Request App',
    category: 'RESOURCE MANAGEMENT',
    description: 'Mobile application to facilitate recycling pickups and tracking using dual-user MVVM architecture.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
    tags: ['Android', 'Java MVVM'],
    links: { github: 'https://github.com/udini16/Recycle-Request-App', live: '#' }
  },
  {
    id: 6,
    title: 'JobTracker / AI Portal',
    category: 'EMPLOYMENT INTELLIGENCE',
    description: 'A full-stack application that scrapes job postings and uses AI to generate personalized application emails based on resume data.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    tags: ['React.js', 'Node.js', 'MySQL', 'AI Automation'],
    links: { github: 'https://github.com/udini16/udini-portfolio', live: '#' }
  },
  {
    id: 7,
    title: 'Pokédex Web App',
    category: 'MUTANT DATABASE',
    description: 'Interactive database of Pokémon utilizing external APIs for live data fetching.',
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80&w=800',
    tags: ['React.js', 'Tailwind CSS'],
    links: { github: '#', live: '#' }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>// SCHEMATICS & BLUEPRINTS</h2>
        </motion.div>

        <div className="schematics-grid">
          {projects.map((project, index) => (
            <motion.div
              className="schematic-card hud-panel"
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: (index % 3) * 0.1 }}
            >
              <div className="schematic-image">
                <img src={project.image} alt={project.title} />
                <div className="scanlines"></div>
              </div>

              <div className="schematic-info">
                <div className="schematic-category">[{project.category}]</div>
                <h3 className="schematic-title">{project.title}</h3>
                <p className="schematic-desc">{project.description}</p>

                <div className="schematic-tags mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="hud-badge">{tag}</span>
                  ))}
                </div>

                <div className="schematic-links">
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-hud small-btn" title="Source Code">
                    <Code size={18} /> SRC
                  </a>
                  {project.links.live !== '#' && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" className="btn-hud small-btn" title="Execute">
                      <ExternalLink size={18} /> RUN
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
