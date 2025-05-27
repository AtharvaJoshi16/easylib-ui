import fs from "fs";
import path, { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const getComponentEntryPoints = () => {
  const basePath = path.resolve(__dirname, "src/atoms");
  const components = fs
    .readdirSync(basePath)
    .filter((folder) => fs.existsSync(path.join(basePath, folder, "index.ts")));

  const entries: Record<string, string> = {};
  components.forEach((comp) => {
    entries[`atoms/${comp}`] = path.resolve(basePath, comp, "index.ts");
  });

  return entries;
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        ...getComponentEntryPoints(),
      },
      name: "build",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === "index") return `index.js`;
          return `${chunk.name}/index.js`; // e.g. atoms/Button/index.js
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "easylib-ui.css") {
            return "style.css"; // <--- 👈 Rename CSS output here
          }
          return assetInfo.name!;
        },
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ["src"],
      exclude: ["**/*.stories.ts", "**/*.stories.tsx"],
    }),
  ],
});
