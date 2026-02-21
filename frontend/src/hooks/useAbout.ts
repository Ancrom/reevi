import { client } from "../sanity/client";
import { useEffect, useState } from "react";

export interface IAboutData {
  title: string;
  photo: any;
  content: any[];
}

export function useAbout() {
  const [data, setData] = useState<IAboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(`*[_type == "about"][0] {title,photo,content}`).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
