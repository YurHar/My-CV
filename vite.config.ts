import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import viteReact from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      srcDirectory: 'src', // make sure this matches your source folder
    }),
    viteReact(),
  ],
})
