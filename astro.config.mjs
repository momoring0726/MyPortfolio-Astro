// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite"; // Import the plugin

// https://astro.build/config
export default defineConfig({
  // It goes in the 'vite' object, not 'integrations'
  vite: {
    plugins: [tailwindcss()],
  },
});
