import React from "react";
import styles from "../styles/footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/arjun-ramanathan-176b83153/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={styles.icon} />
      </a>
      <a
        href="https://github.com/arjunsr1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={styles.icon} />
      </a>
      <a href="mailto:arjun11@gmail.com">
        <FaEnvelope className={styles.icon} />
      </a>
    </footer>
  );
};

export default Footer;
