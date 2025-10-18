import { prepareSearchableTable } from './prepareSearchableTable'

export function searchableEventlistener(event: MouseEvent) {
  // Find the closest .searchable table ancestor
  const table = (event.target as HTMLElement).closest('table.searchable')
  if (!table) return // Not a click on a searchable table

  const rect = table.getBoundingClientRect()
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    console.log('Clicked outside the table = sort "button"')
  } else {
    console.log('Clicked inside the table')
  }
  prepareSearchableTable(table as HTMLTableElement)
  table.classList.add('searching')
}
