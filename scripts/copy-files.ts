// copy index.html to docs folder and replace script src and link href to point to dist folder
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..')

const srcPath = join(__dirname, '..', 'index.html')
const destDir = join(__dirname, '..', 'docs')
const destPath = join(destDir, 'index.html')

let content = readFileSync(srcPath, 'utf-8')

// Replace script src and link href to point to dist folder
content = content.replace(
  '<script type="module" src="/src/searchable.ts"></script>',
  '<script src="./searchable.min.js"></script>'
)

content = content.replace(
  '<link rel="stylesheet" href="src/searchable.scss" />',
  '<link href="./searchable.min.css" rel="stylesheet" />'
)
mkdirSync(destDir, { recursive: true })
writeFileSync(destPath, content, 'utf-8')
console.log(`Copied and modified index.html to ${destPath}`)

const distJsPath = join(__dirname, '..', 'dist', 'searchable.min.js')
const distCssPath = join(__dirname, '..', 'dist', 'searchable.css')
const destJsPath = join(destDir, 'searchable.min.js')
const destCssPath = join(destDir, 'searchable.min.css')
const destCssPath2 = join(__dirname, '..', 'dist', 'searchable.min.css')

copyFileSync(distJsPath, destJsPath)
console.log(`Copied searchable.min.js to ${destJsPath}`)

copyFileSync(distCssPath, destCssPath)
console.log(`Copied searchable.css to ${destCssPath}`)

copyFileSync(distCssPath, destCssPath2)
console.log(`Copied searchable.min.css to ${destCssPath2}`)
