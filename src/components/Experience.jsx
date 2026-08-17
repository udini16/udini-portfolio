import { motion } from 'framer-motion';
import './Experience.css';

const timelineData = [
  {
    type: 'experience',
    title: 'Full Stack Developer Intern',
    organization: 'Aptronics Sdn Bhd',
    date: '2026 (3 Months)',
    description: 'Contributed to full-stack web development and advanced simulation projects utilizing React and Unreal Engine 5.',
    status: 'SURVIVED'
  },
  {
    type: 'experience',
    title: 'Web & Mobile Apps Trainee',
    organization: 'Softoya International Sdn Bhd',
    date: '2024 (6 Months)',
    description: 'Developed automated data extraction tools and assisted in scaling business management solutions.',
    status: 'SURVIVED'
  },
  {
    type: 'experience',
    title: 'Service Crew',
    organization: 'Finescoop Sdn Bhd',
    date: '2024 (3 Months)',
    description: 'Managed daily store operations, including inventory checks, cash handling, and closing procedures.',
    status: 'SURVIVED'
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science (Hons.)',
    organization: 'UiTM Cawangan Melaka, Kampus Jasin',
    date: '2024 - Present',
    description: 'CGPA: 3.5. Focusing on advanced software engineering, AI, and full-stack development.',
    status: 'IN PROGRESS'
  },
  {
    type: 'education',
    title: 'Diploma in Computer Science',
    organization: 'UiTM Cawangan Kampus Raub',
    date: '2022 - 2024',
    description: 'CGPA: 3.42. Built a strong foundation in programming, databases, and system analysis.',
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
