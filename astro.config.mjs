import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://navarrotiago.vercel.app",
  integrations: [tailwind()],
});
