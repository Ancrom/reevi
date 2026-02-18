import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanity/client";
import { NavLink } from "react-router";
import Icon from "../ui/Icons/Icon";
import styles from "./ArtWork.module.scss";

interface IArtWork {
  title: string;
  image: any;
  prevId: string;
  nextId: string;
}

export default function ArtWork() {
  const { category, id } = useParams();

  const [data, setData] = useState<IArtWork>({
    title: "",
    image: "",
    prevId: "",
    nextId: "",
  });

  useEffect(() => {
    const query = `*[_type == "artworks" && _id == $id][0] {
    title,
    "image": image.asset->url,
    "prevId": *[_type == "artworks" && category == $category && orderRank < ^.orderRank]
      | order(orderRank desc)[0]._id,
    "nextId": *[_type == "artworks" && category == $category && orderRank > ^.orderRank]
      | order(orderRank asc)[0]._id
  }`;

    client.fetch(query, { id, category } as Record<string, any>).then(setData);
  }, [id, category]);

  if (!data || !data.image) return <Icon name="spinner" size={24} />;

  return (
    <div className={styles.artwork}>
      <img
        src={urlFor(data.image).auto("format").fit("max").url()}
        alt={data.title}
        loading="lazy"
      />
      <div className={styles.line}>
        {data.prevId && (
          <NavLink
            className={styles.back}
            to={`/artworks/${category}/${data.prevId}`}
          >
            prev
          </NavLink>
        )}
        {data.nextId && (
          <NavLink
            className={styles.next}
            to={`/artworks/${category}/${data.nextId}`}
          >
            next
          </NavLink>
        )}
      </div>
    </div>
  );
}
