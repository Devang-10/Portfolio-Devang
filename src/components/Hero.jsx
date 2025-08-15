import { motion } from "framer-motion";
import { SiCplusplus, SiTailwindcss } from "react-icons/si";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            DevanG
          </motion.h1>
          <motion.h2
            className="hero-subtitle"
            variants={fadeInUp}
            style={{ fontSize: "1.6rem" }}
          >
            Full-Stack Developer | Competitive Programmer
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            Building impactful digital solutions, I combine robust full-stack
            web development with integrated AI features. My expertise in data
            structures, algorithms, and scalable MERN stack applications allows
            me to create highly functional and innovative user experiences.
          </motion.p>

          {/* Combined container for buttons and social links */}
          <div
            className="actions-container"
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginTop: "1.5rem",
            }}
          >
            <motion.div
              className="cta-buttons"
              variants={fadeInUp}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
            >
              <motion.a
                href="#projects"
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.a>
              <motion.a
                href="#coding-profiles"
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Coding Profiles
              </motion.a>
              {/* === MODIFIED RESUME BUTTON === */}
              <motion.a
                href="/Dev_Resume.pdf" // Link to your resume in the /public folder
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Recommended for security
                className="cta-primary" // Same style as the "View My Projects" button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View / Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
            {/* <motion.div
              className="social-links"
              variants={staggerContainer}
              style={{ marginLeft: "1.5rem" }}
            >
              <motion.a href="https://github.com/Devang-10" target="_blank">
                <i className="fab fa-github"> </i>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/devangjain10"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a
                href="https://codolio.com/profile/Devang_10"
                target="_blank"
              >
                <i className="fa-solid fa-code"></i>
              </motion.a>
            </motion.div> */}
          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className="skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
              gap: "1.5rem",
              padding: "2rem",
              borderRadius: "20px",
              background: "rgba(30, 41, 59, 0.8)",
              backdropFilter: "blur(10px)",
              marginBottom: 50,
              textAlign: "center",
            }}
          >
            {/* Row 1 */}
            <div style={{ color: "#61DAFB" }} title="React">
              <i className="fab fa-react" style={{ fontSize: "3rem" }}></i>
              <p style={{ fontSize: "1rem", marginTop: "0.8rem" }}>React</p>
            </div>
            <div style={{ color: "#339933" }} title="Node.js">
              <i className="fab fa-node-js" style={{ fontSize: "3rem" }}></i>
              <p style={{ fontSize: "1rem", marginTop: "0.8rem" }}>Node</p>
            </div>
            <div style={{ color: "#518fbeff" }} title="MySQL">
              <i className="fas fa-database" style={{ fontSize: "3rem" }}></i>
              <p style={{ fontSize: "1rem", marginTop: "0.8rem" }}>MySQL</p>
            </div>
            {/* Updated Tailwind Icon */}
            <div style={{ color: "#38B2AC" }} title="Tailwind CSS">
              <SiTailwindcss style={{ fontSize: "3rem" }} />
              <p style={{ fontSize: "1rem", marginTop: "0.8rem" }}>Tailwind</p>
            </div>

            <div style={{ color: "#E34F26" }} title="Python">
              <i className="fab fa-python" style={{ fontSize: "3rem" }}></i>
              <p style={{ fontSize: "1rem", marginTop: "0.8rem" }}>Python</p>
            </div>

            {/* Row 2 */}
            <div style={{ color: "#3097e7ff" }} title="C++">
              <SiCplusplus style={{ fontSize: "3rem" }} />
              <p style={{ fontSize: "1rem", marginTop: "0.8rem" }}>C++</p>
            </div>

            <div style={{ color: "#E34F26" }} title="HTML">
              <i className="fab fa-html5" style={{ fontSize: "3rem" }}></i>
              <p style={{ fontSize: "1rem", marginTop: "0.8rem" }}>HTML</p>
            </div>
            <div style={{ color: "#009dffff" }} title="CSS">
              <i className="fab fa-css3-alt" style={{ fontSize: "3rem" }}></i>
              <p style={{ fontSize: "1rem", marginTop: "0.8rem" }}>CSS</p>
            </div>
            <div style={{ color: "#FF6C37" }} title="Postman">
              <i
                className="fa-solid fa-rocket"
                style={{ fontSize: "3rem" }}
              ></i>
              <p style={{ fontSize: "1rem", marginTop: "0.8rem" }}>Postman</p>
            </div>
            <div style={{ color: "#F05032" }} title="Git">
              <i className="fab fa-git-alt" style={{ fontSize: "3rem" }}></i>
              <p style={{ fontSize: "1rem", marginTop: "0.8rem" }}>Git</p>
            </div>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Proactively seeking new opportunities.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
