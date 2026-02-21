import { urlFor } from "../../../sanity/client";

export default function GalleryItem({ artWork }: any) {
  const imageAsset = artWork.image || artWork;

  if (!imageAsset) return null;
  return (
    <img
      src={urlFor(imageAsset).auto("format").fit("max").url()}
      alt={artWork.title || artWork.caption || "Concept detail"}
      loading="lazy"
    />
  );
}
