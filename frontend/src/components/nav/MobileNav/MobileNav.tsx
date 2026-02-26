import { NavLink } from "react-router";
import styles from "./MobileNav.module.scss";

interface IMobileNavProps {
  children: React.ReactNode;
  toggleMenu?: () => void;
}

export default function MobileNav({ children, toggleMenu }: IMobileNavProps) {
  return (
    <div className={styles.nav} onClick={toggleMenu}>
      <div className={styles.logo}>Natali Samutina</div>
      {children}
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={styles.link}>
              Illustration
            </NavLink>
          </li>
          <li>
            <NavLink to="/concept" className={styles.link}>
              Concept
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.link}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
