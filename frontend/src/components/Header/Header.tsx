import Social from "../Social/Social";
import Nav from "../Nav/Nav";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <Social />
          <div className={styles.wrapper}>
            <div className={styles.logo}>Natali Samutina</div>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
}
