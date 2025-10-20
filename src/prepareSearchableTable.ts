import { createSearchAbleInput } from './createSearchableInput'
import { generateRandomId } from './generateRandomId'
import { generateSearchableDataValues } from './generateSearchableDataValues'

export function prepareSearchableTable(table: HTMLTableElement) {
  if (!table.id) table.id = 'st-' + generateRandomId()

  // Create the search input element
  createSearchAbleInput(table)
  void generateSearchableDataValues(table)
}
