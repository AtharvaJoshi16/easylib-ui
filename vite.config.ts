import glob from "fast-glob";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

const externalDeps = Object.keys(peerDependencies || {});

const entries = glob.sync("src/**/index.ts");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: entries, // main entry,
      name: "build",
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
      },
      output: {
        preserveModules: true, // 👈 keeps folder structure
        preserveModulesRoot: "src", // 👈 start folders from /src
        exports: "named",
        entryFileNames: "[name].[format].js",
        chunkFileNames: "[name].[format].js",
      },
    },
    // sourcemap: true,
    // emptyOutDir: true,
  },
  plugins: [
    dts({
      entryRoot: "src",
      insertTypesEntry: true,
      exclude: ["**/*.stories.ts", "**/*.stories.tsx", "**/__tests__/**.tsx"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
