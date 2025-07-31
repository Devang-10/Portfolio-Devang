import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/Resumind.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Resumind - AI Resume Analyzer</h3>
          <p>
            A full-stack, serverless web application that increases resume
            shortlisting by 70% through actionable feedback and ATS
            optimization.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>Puter.js</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/RESTExplorer.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>RESTExplorer</h3>
          <p>
            A dynamic SPA with React and Tailwind CSS to fetch and display live
            data from the public REST Countries API. Built an interactive UI,
            featuring live search and regional filtering for intuitive data
            discovery.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>TailwindCSS</span>
            <span>REST API</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Ai-code.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>AI Code Reviewer</h3>
          <p>
            an AI-driven code review web app, providing real-time intelligent
            and structured feedback with Gemini API. It can be used to achieve
            60% higher code quality.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>Gemini API</span>
          </div>
        </motion.div>
      </motion.div>
      <div className="project-links">
        <span className="project-1">
          <a
            className="GitHub-Link"
            href="https://github.com/Devang-10/AI-Resume-Analyzer"
            style={{ textDecoration: "none" }}
          >
            {" "}
            GitHub{" "}
          </a>
          <a
            className="Live-Demo-Link"
            href="https://ai-resume-analyzer-kappa-two.vercel.app/"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Live Demo{" "}
          </a>
        </span>
        <span className="project-2">
          <a
            className="GitHub-Link"
            href="https://github.com/Devang-10/RESTExplorer"
            style={{ textDecoration: "none" }}
          >
            {" "}
            GitHub{" "}
          </a>
          <a
            className="Live-Demo-Link"
            href="https://rest-explorer-lime.vercel.app/"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Live Demo{" "}
          </a>
        </span>
        <span className="project-3">
          <a
            className="GitHub-Link"
            href="https://github.com/Devang-10/ai-code-reviewer"
            style={{ textDecoration: "none" }}
          >
            {" "}
            GitHub{" "}
          </a>
          <a
            className="Live-Demo-Link"
            href="https://ai-code-reviewer-1-tudw.onrender.com/"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Live Demo{" "}
          </a>
        </span>
      </div>
    </motion.section>
  );
};
