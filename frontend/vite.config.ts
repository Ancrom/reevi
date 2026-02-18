import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	base: "/reevi/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, filePath) => {
          if (
            filePath.includes("vars.scss") ||
            filePath.includes("mixins.scss")
          ) {
            return content;
          }

          const varsPath = path.resolve(__dirname, "src/styles/_vars.scss");
          const mixinsPath = path.resolve(__dirname, "src/styles/mixins/_mixins.scss");

          return `
            @use "${varsPath}" as *;
            @use "${mixinsPath}" as *;
            ${content}
          `;
        },
      },
    },
  },
});
