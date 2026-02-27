import { client } from "../sanity/client";
import { type IArtView } from "../types/galleryTypes";
import { useQuery } from "@tanstack/react-query";

export function useIllustration(
  type: string | undefined,
  id: string | undefined,
) {
  const { data, isLoading } = useQuery({
    queryKey: ["illustrations", type, id],
    queryFn: () =>
      client.fetch<IArtView>(
        `
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
    `,
        { type, id },
      ),
    enabled: !!type && !!id,
    staleTime: Infinity,
  });
  const formatedData = (data: IArtView) => {
    return {
      _id: data._id,
      title: data.title,
      image: data.image,
      nav: {
        prev: data.nav.prev ? `/illustration/${data.nav.prev}` : undefined,
        next: data.nav.next ? `/illustration/${data.nav.next}` : undefined,
      },
    };
  };

  return { data: data ? formatedData(data) : null, isLoading };
}
