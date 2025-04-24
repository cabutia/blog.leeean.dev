import { DEFAULT_TAG_CONFIG } from "@/tags";
import type { CollectionEntry } from "astro:content";

export const defaultTag = (slug: string): CollectionEntry<"tags"> => ({
    id: slug,
    collection: "tags",
    data: {
        slug,
        label: slug,
        colors: DEFAULT_TAG_CONFIG,
    },
});
