import { motion } from 'framer-motion';
import './Experience.css';

const timelineData = [
  {
    type: 'experience',
    title: 'Full Stack Developer Intern',
    organization: 'Aptronics Sdn Bhd',
    date: 'Mar 2026 - Jul 2026',
    description: 'Engineered a custom C++ runtime scenario editor in Unreal Engine 5 (40% setup time reduction) and optimized simulation performance (20% crash reduction).',
    status: 'SURVIVED'
  },
  {
    type: 'experience',
    title: 'Software Developer Intern',
    organization: 'Softoya Sdn Bhd',
    date: 'Sep 2023 - Feb 2024',
    description: 'Developed responsive enterprise web components with Laravel and Alpine.js, and integrated Tesseract OCR API to automate data entry by 60%.',
    status: 'SURVIVED'
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science (Hons.)',
    organization: 'UiTM Cawangan Melaka, Kampus Jasin',
    date: 'Completed: July 2026',
    description: 'CGPA: 3.50. Focus on Software Engineering, Mobile Programming, Image Processing, and AI Algorithms.',
    status: 'COMPLETED'
  },
  {
    type: 'education',
    title: 'Diploma in Computer Science',
    organization: 'UiTM Cawangan Pahang, Kampus Raub',
    date: 'Completed: Feb 2024',
    description: 'CGPA: 3.41. Foundation in Data Structures, Java OOP, and Web Development.',
    status: 'COMPLETED'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div 
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>// SURVIVAL HISTORY</h2>
        </motion.div>

        <div className="history-list">
          {timelineData.map((item, index) => (
            <motion.div 
              className="history-item hud-panel"
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="history-header">
                <span className="history-type">[{item.type.toUpperCase()}]</span>
                <span className="history-date">{item.date}</span>
              </div>
              <h3 className="history-title">{item.title}</h3>
              <div className="history-org">LOC: {item.organization}</div>
              <p className="history-desc">{item.description}</p>
              <div className="history-status">
                STATUS: <span className={item.status === 'SURVIVED' || item.status === 'COMPLETED' ? 'text-safe' : 'text-alert'}>{item.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
