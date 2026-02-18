import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router";
import { GridRowsMasonry } from "grid-rows-masonry";
import { client } from "../../../sanity/client";
import GalleryItem from "../GalleryItem/GalleryItem";
import styles from "./Gallery.module.scss";

interface IGalleryProps {
  tag: string;
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
    const query = `*[_type == "artworks" && $tag in tags] | order(orderRank asc){_id,title, image}`;
    client
      .fetch<IArtWork[]>(query, {
        tag: props.tag,
      } as Record<string, any>)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, [props.tag]);

  console.log(projects);

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
          to={`/artworks/${props.tag}/${project._id}`}
          key={project._id}
        >
          <GalleryItem artWork={project} />
        </NavLink>
      ))}
    </div>
  );
}
