import * as fs from 'fs'
import * as path from 'path'
import { translation_keys, translations, supported_languages, type Language } from '../src/translations'

const distDir = path.join(process.cwd(), 'dist')

function replaceContent(content: string, lang: Language): string {
  let result = content

  for (const key of translation_keys) {
    const value = translations[lang][key]
    result = result.replace(RegExp(`'${key}'`, 'g'), `'${value}'`)
    // double quotes in CSS content
    result = result.replace(RegExp(`"${key}"`, 'g'), `"${value}"`)
  }

  return result
}

function getSearchableFiles(): string[] {
  const files = fs.readdirSync(distDir)
  return files.filter(file => file.startsWith('searchable.'))
}

function generateLanguageVersions(): void {
  console.log('Generating language versions...')

  const files = getSearchableFiles()
  console.log(`Found files: ${files.join(', ')}`)

  // Process each language
  for (const lang of supported_languages) {
    const langDir = path.join(distDir, lang)

    // Create language directory
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true })
    }

    // Process each file
    for (const file of files) {
      const sourcePath = path.join(distDir, file)
      const content = fs.readFileSync(sourcePath, 'utf-8')
      const translatedContent = replaceContent(content, lang)
      const targetPath = path.join(langDir, file)

      fs.writeFileSync(targetPath, translatedContent, 'utf-8')
      console.log(`✓ Generated ${lang}/${file}`)
    }
  }

  // Copy English versions to replace original files in dist root
  console.log('\nCopying English versions to dist root...')
  const enDir = path.join(distDir, 'en')

  for (const file of files) {
    const sourcePath = path.join(enDir, file)
    const targetPath = path.join(distDir, file)

    fs.copyFileSync(sourcePath, targetPath)
    console.log(`✓ Copied en/${file} to ${file}`)
  }

  console.log('\n✓ Language generation complete!')
}

generateLanguageVersions()
