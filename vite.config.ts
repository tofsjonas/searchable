/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'

const getPackageName = () => {
  return packageJson.name
}

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, char => char[1].toUpperCase())
  } catch {
    throw new Error('Name property in package.json is missing.')
  }
}

const fileName = {
  es: `${getPackageName()}.es.js`,
  // iife: `${getPackageName()}.iife.js`,
} as const

const formats = Object.keys(fileName) as Array<keyof typeof fileName>

export default defineConfig({
  base: './',
  plugins: [
    dts({
      entryRoot: 'src',
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  build: {
    // minify: false,
    outDir: './dist',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: getPackageNameCamelCase(),
      formats,
      fileName: format => fileName[format as keyof typeof fileName],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  test: {
    watch: false,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@@': path.resolve(__dirname),
    },
  },
  esbuild: {
    minifyIdentifiers: false,
    target: 'es2020',
    charset: 'utf8',
    legalComments: 'inline',
    drop: ['debugger'],
    define: { global: 'window' },
  },
})
