import { defineConfig, type ConfigEnv, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// @ts-ignore
import sri from "vite-plugin-sri";

export default defineConfig(
  ({ mode }: ConfigEnv): UserConfig => ({
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          icon: true,
          ref: true,
          svgo: true,
          svgoConfig: {
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
            ],
          },
        },
      }),
      sri(),
    ],

    build: {
      // Never ship source maps to production — exposes original source to anyone with DevTools
      sourcemap: mode === "development" ? "inline" : false,

      // Minify via terser — strips comments, renames internals
      minify: "terser",
      terserOptions: {
        compress: {
          // Remove all console.* and debugger statements in production builds
          drop_console: true,
          drop_debugger: true,
        },
      },

      // Chunk splitting
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom", "react-router-dom"],
          },
        },
      },
    },
  }),
);
