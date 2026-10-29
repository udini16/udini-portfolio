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
                Full-Stack Software Developer and Computer Science graduate with proven experience shipping production-grade web systems, high-performance simulation tools, and AI automation pipelines. Dedicated to building reliable, scalable web platforms and high-efficiency business workflows.
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
                <div className="skill-item"><span className="skill-name">React / Node.js</span> <span className="skill-lvl">[LVL: 90]</span></div>
                <div className="skill-item"><span className="skill-name">PHP / Laravel</span> <span className="skill-lvl">[LVL: 85]</span></div>
                <div className="skill-item"><span className="skill-name">C++ / Unreal Engine</span> <span className="skill-lvl">[LVL: 80]</span></div>
                <div className="skill-item"><span className="skill-name">Docker / CI/CD</span> <span className="skill-lvl">[LVL: 70]</span></div>
                <div className="skill-item"><span className="skill-name">Python / AI (YOLO)</span> <span className="skill-lvl text-alert">[LVL: 90 - EXPERT]</span></div>
                <div className="skill-item"><span className="skill-name">SQL / PostgreSQL</span> <span className="skill-lvl">[LVL: 80]</span></div>
              </div>

              <div className="inventory-actions mt-4">
                <a href="/resume.pdf" target="_blank" className="btn-hud">
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
