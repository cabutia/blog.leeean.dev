// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import { fileURLToPath } from "url";
import path from "path";
import { glob, globSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    site: "https://blog.leeean.dev",
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    },
    adapter: cloudflare(),
    integrations: [mdx(), sitemap()],
});
