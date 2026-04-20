import { toggleSearchable } from './toggleSearchable'

export function searchableEventListener(event: MouseEvent) {
  // Quick check: is the click directly on a TABLE element?
  // (which is what will happen if we click the :before element)
  if ((event.target as HTMLElement).nodeName !== 'TABLE') return

  // Find the closest .searchable table ancestor
  const table = (event.target as HTMLElement).closest('table.searchable')
  if (!table) return // Not a .searchable table

  toggleSearchable(table as HTMLTableElement)
}
