// Main library exports
export { createSearchAbleInput } from './createSearchableInput'
export { generateRandomId } from './generateRandomId'
export { generateSearchableDataValues } from './generateSearchableDataValues'
export { handleSearchableInput } from './handleSearchableInput'
export { prepareSearchableTable } from './prepareSearchableTable'
export { searchableEventListener } from './searchableEventListener'
export { toggleSearchable } from './toggleSearchable'

// Import styles
import './searchable.scss'
import { searchableEventListener } from './searchableEventListener'

// Auto-initialize if in browser environment
if (typeof document !== 'undefined') {
  document.addEventListener('click', searchableEventListener)
}
