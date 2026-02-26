import { useState, useEffect } from "react";
import classnames from "classnames";
import Gallery from "../gallery/Gallery/Gallery";
import type { IConcept } from "../../types/galleryTypes";
import styles from "./Concent.module.scss";

interface IConceptProps {
  data: IConcept[];
}

export default function Concept({ data }: IConceptProps) {
  const [activeConcept, setActiveConcept] = useState<IConcept>(data[0]);

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
      <div className={styles.aside}>
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
      </div>
      <div className={styles.content}>
        {activeConcept && <Gallery items={activeConcept} type="concept" />}
      </div>
    </div>
  );
}
