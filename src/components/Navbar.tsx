// src/components/Navbar.tsx
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/bookshelf">Bookshelf</Link>
        </li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
