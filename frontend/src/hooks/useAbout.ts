import { client } from "../sanity/client";
import { useQuery } from "@tanstack/react-query";

export interface IAboutData {
  title: string;
  photo: any;
  content: any[];
}

export function useAbout() {
  return useQuery({
    queryKey: ["about"],
    queryFn: () =>
      client.fetch<IAboutData>(`*[_type == "about"][0] {title,photo,content}`),
    staleTime: Infinity,
  });
}
