import { client } from "../sanity/client";
import { useEffect, useState } from "react";

export function useArtworks<T>(type: string) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch<T[]>(`*[_type == $type] | order(orderRank)`, { type })
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, [type]);

  return { data, loading };
}
