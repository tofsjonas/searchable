import { generateSearchableDataValues } from './generateSearchableDataValues'
import { handleSearchableInput } from './handleSearchableInput'

export function createSearchAbleInput(table: HTMLTableElement): void {
  let input = table.tHead!.querySelector(`input[type="search"]`) as HTMLInputElement

  if (!input) {
    input = document.createElement('input')
    input.type = 'search'
    input.placeholder = 'Search...'
    const td = document.createElement('td') // td, since we want it to play nice with sortable
    td.colSpan = table.tHead?.rows[0].cells.length || 1
    td.appendChild(input)
    const tr = document.createElement('tr')
    tr.id = `tr-${table.id}`
    tr.appendChild(td)
    // put it first in the thead
    table.tHead?.insertBefore(tr, table.tHead.firstChild)
  }

  // Add event listener to filter table rows based on search input
  input.addEventListener('input', () => {
    // In case there have been changes to the table data, regenerate searchable data values
    void generateSearchableDataValues(table)
    handleSearchableInput(input, table)
  })
  input.focus()
}
