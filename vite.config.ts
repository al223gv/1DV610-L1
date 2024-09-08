import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    root: 'src',
    build: {
      outDir: '../dist',
      target: 'esnext'
    },
    plugins: [tsconfigPaths()],
  }
)
