import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"
import { resolve } from 'pathe'
import { nodeExternals } from "./node-externals"

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    nodeExternals()
  ],
  server: {
    port: 3000
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SharedComponents',
      // the proper extensions will be added
      fileName: 'shared-components',
    },
  }
})
