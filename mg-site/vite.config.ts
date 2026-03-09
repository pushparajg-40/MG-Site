import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"
// @ts-ignore
import sri from "vite-plugin-sri";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    svgr({
      svgrOptions: {
        icon: true,
        ref: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            }
          ]
        }
      }
    }),
    sri()
  ],
})
