import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import classnames from "classnames";
import Gallery from "../gallery/Gallery/Gallery";
import type { IConcept } from "../../types/galleryTypes";
import styles from "./Concent.module.scss";

interface IConceptProps {
  data: IConcept[];
}

export default function Concept({ data }: IConceptProps) {
  const [activeConcept, setActiveConcept] = useState<IConcept>(data[0]);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (data && data.length > 0 && !activeConcept) {
      setActiveConcept(data[0]);
    }
  }, [data, activeConcept]);

  const handleClick = (concept: IConcept) => {
    setActiveConcept(concept);
  };

  return (
    <div className={classnames(styles.concept, "container")}>
      <motion.div
        ref={ref}
        className={styles.aside}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          ease: "easeOut",
        }}
      >
        {data.map((item) => {
          return (
            <button
              key={item._id}
              className={classnames(styles.button, {
                [styles.active]: item._id === activeConcept?._id,
              })}
              onClick={() => handleClick(item)}
            >
              <span>{item.title}</span>
            </button>
          );
        })}
      </motion.div>
      <div className={styles.content}>
        {activeConcept && <Gallery items={activeConcept} type="concept" />}
      </div>
    </div>
  );
}
