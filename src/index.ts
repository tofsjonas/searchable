// Main library exports
export { createSearchAbleInput } from './createSearchableInput'
export { generateRandomId } from './generateRandomId'
export { generateSearchableDataValues } from './generateSearchableDataValues'
export { handleSearchableInput } from './handleSearchableInput'
export { prepareSearchableTable } from './prepareSearchableTable'
export { searchableEventlistener } from './searchableEventlistener'
export { toggleSearchable } from './toggleSearchable'

// Import styles
import './searchable.scss'
import { searchableEventlistener } from './searchableEventlistener'

// Auto-initialize if in browser environment
if (typeof document !== 'undefined') {
  document.addEventListener('click', searchableEventlistener)
}
