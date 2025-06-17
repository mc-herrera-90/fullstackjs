import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkDirective from 'remark-directive'
import remarkCustomDirective from './remark-directives.js'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkDirective, remarkCustomDirective, remarkGfm],
      rehypePlugins: [rehypeHighlight]
    })
  ]
})
