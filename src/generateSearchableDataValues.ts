import { getSearchableTableCellValue } from './getSearchableTableCellValue'

let searchableDataVersion = 0

// This function _could_ take some time, so I want it to be async
export async function generateSearchableDataValues(table: HTMLTableElement): Promise<void> {
  const currentVersion = ++searchableDataVersion
  const cells = table.querySelectorAll('tbody td:not([data-val])') as NodeListOf<HTMLTableCellElement>

  for (let i = 0; i < cells.length; i++) {
    if (currentVersion !== searchableDataVersion) return
    const cell = cells[i]
    cell.setAttribute('data-val', getSearchableTableCellValue(cell).toString())
  }
}
