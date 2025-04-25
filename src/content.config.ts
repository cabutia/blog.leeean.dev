import { glob, file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";
import { DEFAULT_TAG_CONFIG } from "./tags";

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        heroColor: z.string().optional(),
        tags: z.array(reference("tags")).optional(),
        category: reference("categories"),
        author: z.string().default("Leandro Gomez"),
    }),
});

const categories = defineCollection({
    loader: file("./src/content/categories.json"),
    schema: z.object({
        slug: z.string(),
        label: z.string(),
    }),
});

const tags = defineCollection({
    loader: file("./src/content/tags.json"),
    schema: z.object({
        slug: z.string(),
        label: z.string(),
        icon: z.string(),
        colors: z
            .object({
                background: z.string(),
                color: z.string(),
            })
            .optional()
            .default(DEFAULT_TAG_CONFIG),
    }),
});

export const collections = { blog, tags, categories };
