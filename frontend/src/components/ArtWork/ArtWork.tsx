import { urlFor } from "../../sanity/client";
import { NavLink } from "react-router";
import { motion } from "motion/react";
import { type IArtView } from "../../types/galleryTypes";
import Icon from "../ui/Icons/Icon";
import styles from "./ArtWork.module.scss";

interface IArtWorkProps {
  items: IArtView;
}

export default function ArtWork({ items }: IArtWorkProps) {
  if (!items || !items.image) return <Icon name="spinner" size={24} />;

  return (
    <div className="container">
      <motion.div
        className={styles.artwork}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <img
          src={urlFor(items.image).auto("format").fit("max").url()}
          alt={items.title}
          loading="lazy"
        />
        <div className={styles.line}>
          {items.nav.prev && (
            <NavLink className={styles.back} to={items.nav.prev}>
              prev
            </NavLink>
          )}
          {items.nav.next && (
            <NavLink className={styles.next} to={items.nav.next}>
              next
            </NavLink>
          )}
        </div>
      </motion.div>
      <div className={styles.artwork}></div>
    </div>
  );
}
