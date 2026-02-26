import Social from "../Social/Social";
import DesktopNav from "../nav/DesktopNav/DesktopNav";
import MobileNav from "../nav/MobileNav/MobileNav";
import styles from "./Header.module.scss";
import { useSocial } from "../../hooks/useSocial";
import { useState, useEffect } from "react";
import Icon from "../ui/Icons/Icon";
import classnames from "classnames";

export default function Header() {
  const { data, isLoading } = useSocial();
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuActive ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuActive]);

  const toggleMenu = () => {
    if (window.innerWidth >= 1024) return;
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          {isLoading && <Icon name="spinner" size={22} className="spinner" />}
          {data && <Social data={data} className={styles.social} />}
          <div className={styles.wrapper}>
            <div className={styles.logo}>Natali Samutina</div>
            <Icon
              name="menu"
              size={22}
              className={styles.menu}
              onClick={toggleMenu}
            />
            <div
              className={classnames(styles.mobile, {
                [styles.active]: menuActive,
              })}
            >
              <MobileNav toggleMenu={toggleMenu}>
                {data && (
                  <Social data={data} className={styles.mobile__social} />
                )}
              </MobileNav>
            </div>
            <div className={styles.desktop}>
              <DesktopNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
