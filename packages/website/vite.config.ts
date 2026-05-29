import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const tanstackStartOptions = {
  prerender: {
    enabled: true,
    crawlLinks: true,
    autoStaticPathsDiscovery: true,
  }
}

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [devtools(), tailwindcss(), tanstackStart(tanstackStartOptions), viteReact()],
})

export default config
