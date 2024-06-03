import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vue(), federation({
    name: "react-app",
    remotes: {
      "react-app-2": "http://localhost:4173/assets/reactAppEntry2.js",
      "vue-app": "http://localhost:4174/assets/vueAppEntry.js",
    },
    shared: ["react", "react-dom", "vue"],
  })],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
