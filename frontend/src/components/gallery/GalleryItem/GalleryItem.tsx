import { urlFor } from "../../../sanity/client";

export default function GalleryItem({ artWork }: any) {
  return (
    <img
      src={urlFor(artWork.image).auto("format").fit("max").url()}
      alt={artWork.title}
      loading="lazy"
    />
  );
}
