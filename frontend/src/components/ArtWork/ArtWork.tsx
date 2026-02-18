import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanity/client";
import { NavLink } from "react-router";
import styles from "./ArtWork.module.scss";

interface IArtWork {
  title: string;
  image: any;
  prevId: string;
  nextId: string;
}

export default function ArtWork() {
  const { tag, id } = useParams();

  const [data, setData] = useState<IArtWork>({
    title: "",
    image: "",
    prevId: "",
    nextId: "",
  });

  useEffect(() => {
    const query = `*[_type == "artworks" && _id == $id][0] {
    title,
    image,
    "prevId": *[_type == "artworks" && $tag in tags && orderRank < ^.orderRank]
      | order(orderRank desc)[0]._id,
    "nextId": *[_type == "artworks" && $tag in tags && orderRank > ^.orderRank]
      | order(orderRank asc)[0]._id
  }`;

    client.fetch(query, { id, tag } as Record<string, any>).then(setData);
  }, [id, tag]);

  console.log(data);

  if (!data || !data.image) return <div>Loading...</div>;

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
            to={`/artworks/${tag}/${data.prevId}`}
          >
            prev
          </NavLink>
        )}
        {data.nextId && (
          <NavLink
            className={styles.next}
            to={`/artworks/${tag}/${data.nextId}`}
          >
            next
          </NavLink>
        )}
      </div>
    </div>
  );
}
