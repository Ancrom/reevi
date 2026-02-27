import { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import { GridRowsMasonry } from "grid-rows-masonry";
import { type IConcept, type IIllustration } from "../../../types/galleryTypes";
import GalleryItem from "../GalleryItem/GalleryItem";
import styles from "./Gallery.module.scss";
import classNames from "classnames";

type IGalleryProps =
  | {
      type: "concept";
      items: IConcept;
    }
  | {
      type: "illustration";
      items: IIllustration[];
    };

export default function Gallery({ items, type }: IGalleryProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const masonry = new GridRowsMasonry(gridRef.current);
      return () => masonry.destroy();
    }
  }, [items]);

  /* ================= CONCEPT ================= */
  if (type === "concept" && !Array.isArray(items)) {
    const conceptId = items._id!;
    const images = items.relatedImages ?? [];

    return (
      <div className="container">
        <div
          ref={gridRef}
          className={classNames(styles.gallery, styles.concept)}
        >
          {images.map((img, index) => (
            <NavLink
              key={img._key}
              className={styles.item}
              to={`/concept/${conceptId}/${img._key}`}
            >
              <GalleryItem artWork={img} index={index} />
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  /* ================= ILLUSTRATION ================= */
  if (type === "illustration" && Array.isArray(items)) {
    return (
      <div className="container">
        <div ref={gridRef} className={styles.gallery}>
          {items.map((art, index) => (
            <NavLink
              key={art._id}
              className={styles.item}
              to={`/illustration/${art._id}`}
            >
              <GalleryItem artWork={art} index={index} />
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
