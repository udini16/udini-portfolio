import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div 
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>// SURVIVOR LOGS</h2>
        </motion.div>

        <div className="about-content hud-panel">
          <div className="log-header">
            <span className="log-id">ENTRY #001</span>
            <span className="log-date">DATE: {new Date().toLocaleDateString()}</span>
          </div>

          <div className="about-grid">
            <div className="polaroid-wrapper">
              <div className="polaroid">
                <img src="/profile.jpg?v=2" alt="Survivor" onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://ui-avatars.com/api/?name=Muhammad+Izzuddin&background=3d4a3e&color=fff&size=512";
                }} />
                <div className="polaroid-caption">SUBJECT: IZZUDDIN</div>
              </div>
            </div>

            <div className="log-details">
              <h3>BACKGROUND:</h3>
              <p className="typewriter-text">
                Subject is a final year Computer Science student. Demonstrates high proficiency in full-stack development, AI applications, and UX design. 
                Adaptable in high-stress environments. Currently specializing in real-time object detection and OCR automation tools.
              </p>
              
              <table className="stats-table mb-4">
                <tbody>
                  <tr>
                    <td>NAME:</td>
                    <td>Muhammad Izzuddin Bin Mohd Fathi</td>
                  </tr>
                  <tr>
                    <td>LOCATION:</td>
                    <td>Shah Alam, Selangor (SAFE ZONE)</td>
                  </tr>
                  <tr>
                    <td>COMM:</td>
                    <td>izzuddinfathi0@gmail.com</td>
                  </tr>
                  <tr>
                    <td>TRAINING:</td>
                    <td>Bachelor of Computer Science (UiTM)</td>
                  </tr>
                </tbody>
              </table>

              <h3>COMBAT PROFICIENCIES:</h3>
              <div className="skills-grid mt-3">
                <div className="skill-item"><span className="skill-name">PHP / Laravel</span> <span className="skill-lvl">[LVL: 85]</span></div>
                <div className="skill-item"><span className="skill-name">Python / Django</span> <span className="skill-lvl">[LVL: 80]</span></div>
                <div className="skill-item"><span className="skill-name">React / Tailwind</span> <span className="skill-lvl">[LVL: 70]</span></div>
                <div className="skill-item"><span className="skill-name">Java / Android</span> <span className="skill-lvl">[LVL: 60]</span></div>
                <div className="skill-item"><span className="skill-name">YOLOv10 AI</span> <span className="skill-lvl text-alert">[LVL: 90 - EXPERT]</span></div>
                <div className="skill-item"><span className="skill-name">Figma / UX</span> <span className="skill-lvl">[LVL: 50]</span></div>
              </div>

              <div className="inventory-actions mt-4">
                <a href="/MuhammadIzzuddin_Resume.pdf" target="_blank" className="btn-hud">
                  [ LOOT RESUME ]
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
