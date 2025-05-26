import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "build",
      fileName: (format) => `build.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
