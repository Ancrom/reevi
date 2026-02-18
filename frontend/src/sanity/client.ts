import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "begf0yyf",
  dataset: "artworks",
  useCdn: true,
  apiVersion: "2026-02-17",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
