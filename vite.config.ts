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
      formats: ["es", "cjs"],
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
        return (
          id.startsWith("@core") ||
          id.startsWith("@/core") ||
          id.startsWith("./core") ||
          id.includes("/src/core/") ||
          id.includes("\\src\\core\\")
        );
      },
      output: {
        preserveModules: true, // 👈 keeps folder structure
        preserveModulesRoot: "src", // 👈 start folders from /src
        exports: "named",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
      },
    },
    // sourcemap: true,
    // emptyOutDir: true,
  },
  plugins: [
    dts({
      entryRoot: "src",
      insertTypesEntry: true,
      exclude: ["**/*.stories.ts", "**/*.stories.tsx"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
