import { prepareSearchableTable } from './prepareSearchableTable'

export function toggleSearchable(table: HTMLTableElement): void {
  if (table.classList.contains('searching')) {
    const tr = document.getElementById(`tr-${table.id}`)
    if (tr) tr.remove()
    table.classList.remove('searching')

    const style = document.getElementById('css-' + table.id)
    if (style) style.remove()
  } else {
    table.classList.add('searching')
    prepareSearchableTable(table as HTMLTableElement)
  }
}
