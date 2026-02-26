import { client } from "../sanity/client";
import { useQuery } from "@tanstack/react-query";

export function useArtworks<T>(type: string) {
  return useQuery({
    queryKey: ["artworks", type],
    queryFn: () =>
      client.fetch<T[]>(`*[_type == $type] | order(orderRank)`, { type }),
    staleTime: Infinity,
  });
}
