
import { useQuery } from "@tanstack/react-query";
import { client } from "../sanity/client";
import { type ISocial } from "../types/socialTypes";

export function useSocial() {
  return useQuery({
    queryKey: ["social"],
    queryFn: () =>
      client.fetch<ISocial[]>(`*[_type == "social"] {title,image,link}`),
    staleTime: Infinity,
  });
}
