import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
    extensions: ['.js', '.jsx']
  }
})
