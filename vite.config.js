import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkDirective from 'remark-directive'
import remarkCustomDirective from './remark-directives.js'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight';
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkDirective, remarkCustomDirective, remarkGfm],
      rehypePlugins: [rehypeHighlight]
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@components': path.resolve(__dirname, './src/components'),
      '@data': path.resolve(__dirname, './src/data')
    }
  }
})
