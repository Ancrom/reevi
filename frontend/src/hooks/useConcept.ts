import { client } from "../sanity/client";
import { type IArtView, type IConcept } from "../types/galleryTypes";
import { useQuery } from "@tanstack/react-query";

export function useConcept(id: string, key: string) {
  const query = `*[_type == "concept" && _id == $id][0] {_id,title,relatedImages}`;
  const { data, isLoading } = useQuery({
    queryKey: ["concepts"],
    queryFn: () => client.fetch<IConcept>(query, { id }),
    staleTime: Infinity,
  });
  const formatData = (data: IConcept): IArtView => {
    const images = data.relatedImages || [];
    let i = 0;
    if (key) {
      const idx = images.findIndex((img) => img._key === key);
      if (idx >= 0) i = idx;
    }

    const image = images[i];
    const prev = i > 0 ? images[i - 1]._key : undefined;
    const next = i < images.length - 1 ? images[i + 1]._key : undefined;

    return {
      _id: data._id,
      title: data.title,
      image,
      nav: {
        prev: prev ? `/concept/${data._id}/${prev}` : undefined,
        next: next ? `/concept/${data._id}/${next}` : undefined,
      },
    };
  };

  return { data: data ? formatData(data) : null, isLoading };
}
