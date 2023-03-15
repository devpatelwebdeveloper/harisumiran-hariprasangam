import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts"
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import {resolve} from 'pathe'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(
      {
        emitCssInSsr: true,
      }
    ),
    dts({

      insertTypesEntry:true,
    }
  )
],
  build:{
    lib:{
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SharedUi',
      // the proper extensions will be added
      fileName: 'shared-ui',
      formats:['es','cjs','umd','iife']
    },
  //   rollupOptions: {
  //     external: ['react', 'react-dom', 'styled-components'],
  //     output: {
  //         globals: {
  //             react: 'React',
  //             'react-dom': 'ReactDOM',
  //             'styled-components': 'styled',
  //         },
  //     },
  // },
  }
})
