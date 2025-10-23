// convert ES module to IIFE

// copy dist/searchable.es.js to dist/searchable.iife.js, add IIFE wrapper
import fs from 'fs'

const inputFilePath = './dist/searchable.es.js'
const outputFilePath = './dist/searchable.iife.js'

const wrapInIIFE = (code: string): string => {
  return `(function(document) {
${code}
})(document)
`
}

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err)
    return
  }

  // export {
  //   createSearchAbleInput,
  //   generateRandomId,
  //   generateSearchableDataValues,
  //   getSearchableTableCellValue,
  //   handleSearchableInput,
  //   prepareSearchableTable,
  //   searchableEventlistener,
  //   toggleSearchable
  // };

  // remove the export statements
  const modifiedData = data.replace(/export\s+\{[^}]+\};?/g, '')

  const wrappedCode = wrapInIIFE(modifiedData)

  fs.writeFile(outputFilePath, wrappedCode, 'utf8', err => {
    if (err) {
      console.error('Error writing the file:', err)
      return
    }
    console.log(`Successfully converted to IIFE and saved to ${outputFilePath}`)
  })
})
