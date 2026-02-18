import { NavLink } from "react-router";
import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
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
        <li>
          <NavLink to="/resourses" className={styles.link}>
            Resourses
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
