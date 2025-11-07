import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  css: {
    // Passa os plugins como OBJETOS, sem invocar
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
