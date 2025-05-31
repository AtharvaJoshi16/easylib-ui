import fs from "fs";
import path, { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

const getComponentEntryPoints = () => {
  const folders = ["atoms", "molecules", "interfaces"];

  const entries: Record<string, string> = {};
  folders.forEach((folder) => {
    const basePath = path.resolve(__dirname, `src/${folder}`);
    const components = fs
      .readdirSync(basePath)
      .filter((folder) =>
        fs.existsSync(path.join(basePath, folder, "index.ts"))
      );

    components.forEach((comp) => {
      entries[`${folder}/${comp}`] = path.resolve(basePath, comp, "index.ts");
    });
  });
  return entries;
};

const externalDeps = Object.keys(peerDependencies || {});

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
      external: (id) => {
        // Exclude peer dependencies
        if (
          externalDeps.some((dep) => id === dep || id.startsWith(`${dep}/`))
        ) {
          return true;
        }

        // Exclude @core or any relative import that resolves to src/core
        // return (
        //   id.startsWith("@core") ||
        //   id.startsWith("@/core") ||
        //   id.startsWith("./core") ||
        //   id.includes("/src/core/") ||
        //   id.includes("\\src\\core\\")
        // );
      },
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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
