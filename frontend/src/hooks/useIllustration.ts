import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import {
  type IIllustration,
  type ISanityImage,
} from "../components/gallery/Gallery/Gallery";

export interface IIllustrationView {
  _id: string;
  title?: string;
  image: ISanityImage;
  nav: {
    prev?: string;
    next?: string;
  };
}

export function useIllustration(
  type: string | undefined,
  id: string | undefined,
) {
  const [data, setData] = useState<IIllustrationView | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!type || !id) return;

    setLoading(true);

    const query = `
      *[_type == $type && _id == $id][0] {
        _id,
        title,
        image,
        "nav": {
					"prev": *[_type == $type && orderRank < ^.orderRank]
         	 | order(orderRank desc)[0]._id,
        	"next": *[_type == $type && orderRank > ^.orderRank]
          	| order(orderRank asc)[0]._id}
      	}
    `;

    client.fetch<IIllustrationView>(query, { type, id }).then((res) => {
      if (!res) {
        setData(null);
        setLoading(false);
        return;
      }

      setData({
        _id: res._id,
        title: res.title,
        image: res.image,
        nav: {
          prev: res.nav.prev ? `/illustration/${res.nav.prev}` : undefined,
          next: res.nav.next ? `/illustration/${res.nav.next}` : undefined,
        },
      });

      setLoading(false);
    });
  }, [id, type]);

  return { data, loading };
}
