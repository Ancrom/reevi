import { motion } from "motion/react";
import { urlFor } from "../../../sanity/client";
import { useInView } from "../../../hooks/useInView";
import styles from "./GalleryItem.module.scss";

interface GalleryItemProps {
  artWork: any;
  index: number;
}

export default function GalleryItem({ artWork, index }: GalleryItemProps) {
  const imageAsset = artWork.image || artWork;
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  if (!imageAsset) return null;

  const delay = index * 0.08;

  return (
    <motion.div
      ref={ref}
      className={styles.item}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: Math.min(delay, 0.5),
        ease: "easeOut",
      }}
    >
      <img
        src={urlFor(imageAsset).auto("format").fit("max").url()}
        alt={artWork.title || artWork.caption || "Concept detail"}
        loading="lazy"
      />
    </motion.div>
  );
}
