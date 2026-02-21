import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import {
  type ISanityImage,
  type IConcept,
} from "../components/gallery/Gallery/Gallery";

export interface IConceptView {
  _id: string;
  title?: string;
  image: ISanityImage;
  nav: {
    prev?: string;
    next?: string;
  };
}

export function useConcept(id: string, key: string) {
  const [data, setData] = useState<IConceptView | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "concept" && _id == $id][0] {_id,title,relatedImages}`;
    client.fetch<IConcept>(query, { id }).then((res) => {
      if (!res) {
        setData(null);
        setLoading(false);
        return;
      }

      const images = res.relatedImages || [];
      let i = 0;
      if (key) {
        const idx = images.findIndex((img) => img._key === key);
        if (idx >= 0) i = idx;
      }

      const image = images[i];
      const prev = i > 0 ? images[i - 1]._key : undefined;
      const next = i < images.length - 1 ? images[i + 1]._key : undefined;

      setData({
        _id: res._id,
        title: res.title,
        image,
        nav: {
          prev: prev ? `/concept/${res._id}/${prev}` : undefined,
          next: next ? `/concept/${res._id}/${next}` : undefined,
        },
      });
      setLoading(false);
    });
  }, [id, key]);

  return { data, loading };
}
