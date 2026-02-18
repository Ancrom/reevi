import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router";
import { GridRowsMasonry } from "grid-rows-masonry";
import { client } from "../../../sanity/client";
import GalleryItem from "../GalleryItem/GalleryItem";
import styles from "./Gallery.module.scss";

interface IGalleryProps {
  category: "illustration" | "concept";
}

interface IArtWork {
  _id: string;
  title: string;
  image: any;
  description?: string;
}

export default function Gallery(props: IGalleryProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<IArtWork[]>([]);

  useEffect(() => {
    const query = `*[_type == "artworks" && category == $category] | order(orderRank asc){_id,title,"image": image.asset->url}`;
    client
      .fetch<IArtWork[]>(query, {
        category: props.category,
      } as Record<string, any>)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, [props.category]);

  useEffect(() => {
    if (gridRef.current && projects.length > 0) {
      new GridRowsMasonry(gridRef.current);
    }
  }, [projects]);

  return (
    <div ref={gridRef} className={styles.gallery}>
      {projects.map((project) => (
        <NavLink
          className={styles.item}
          to={`/artworks/${props.category}/${project._id}`}
          key={project._id}
        >
          <GalleryItem artWork={project} />
        </NavLink>
      ))}
    </div>
  );
}
