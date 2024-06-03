import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), federation({
    name: "vue-app",
    filename: "vueAppEntry.js",
    exposes: {
      "./HelloWorld": "./src/components/HelloWorld.vue",
    },
    shared: ["vue"],
  })],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
