import { handleSearchableInput } from './handleSearchableInput'

function generateRandomId() {
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36).substring(2, 9)
}

export function prepareSearchableTable(table: HTMLTableElement) {
  // check if the table has an id
  if (!table.id) {
    // generate a random id
    const id = generateRandomId()
    table.id = 'st-' + id
  }

  // Create the search input element

  // create a table row in the table head and put the input in there
  // But first check that it isn't already there
  let input = table.tHead?.querySelector(`input[type="search"]`) as HTMLInputElement
  if (!input) {
    input = document.createElement('input')
    input.type = 'search'
    input.placeholder = 'Search...'
    const th = document.createElement('th')
    th.colSpan = table.tHead?.rows[0].cells.length || 1
    th.appendChild(input)
    const tr = document.createElement('tr')
    tr.appendChild(th)
    // put it first in the thead
    table.tHead?.insertBefore(tr, table.tHead.firstChild)
  }

  // // Insert the search input before the table
  // table.parentNode?.insertBefore(input, table);

  // Add event listener to filter table rows based on search input
  input.addEventListener('input', () => {
    handleSearchableInput(input, table)
  })
}
