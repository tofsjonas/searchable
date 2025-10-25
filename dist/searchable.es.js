function getSearchableTableCellValue(element) {
  if (!element) return ''
  const first_child = element.firstChild
  if (first_child)
    switch (first_child.nodeName) {
      case 'TIME':
        return first_child.dateTime
      case 'DATA':
        return first_child.value
      case 'METER':
        return first_child.value
      case 'PROGRESS':
        return first_child.value
      case 'ABBR':
        return first_child.title
    }
  return (element.textContent ?? '').trim()
}
let running = !1,
  rerun = !1
async function generateSearchableDataValues(table) {
  if (running) {
    rerun = !0
    return
  }
  running = !0
  do {
    rerun = !1
    const cells = table.querySelectorAll('tbody td:not([data-val])')
    for (let i = 0; i < cells.length; i++)
      cells[i].setAttribute('data-val', getSearchableTableCellValue(cells[i]).toString().toLowerCase())
  } while (rerun)
  running = !1
}
function handleSearchableInput(input, table) {
  const filter = input.value.toLowerCase()
  let style = document.getElementById('css-' + table.id)
  style || ((style = document.createElement('style')), (style.id = 'css-' + table.id), document.head.appendChild(style))
  let css = ''
  ;(filter &&
    (css = `#${table.id} tbody tr{display:none;}
#${table.id} tbody tr:has([data-val*="${filter}"]){display:table-row;}`),
    (style.innerHTML = css))
}
function createSearchAbleInput(table) {
  let input = table.tHead.querySelector('input[type="search"]')
  if (!input) {
    ;((input = document.createElement('input')),
      (input.type = 'search'),
      (input.placeholder = table.dataset.sbPlaceholder ?? '...'),
      (input.className = table.dataset.sbInputClass || ''))
    const td = document.createElement('td')
    ;((td.colSpan = table.tHead?.rows[0].cells.length || 1), td.appendChild(input))
    const tr = document.createElement('tr')
    ;((tr.id = `tr-${table.id}`),
      tr.appendChild(td),
      table.tHead?.appendChild(tr),
      input.addEventListener('input', () => {
        ;(generateSearchableDataValues(table), handleSearchableInput(input, table))
      }))
  }
  input.focus()
}
function generateRandomId() {
  return /* @__PURE__ */ new Date().getTime().toString(36) + '-' + Math.random().toString(36).substring(2, 9)
}
function prepareSearchableTable(table) {
  ;(table.id || (table.id = 'sb-' + generateRandomId()),
    createSearchAbleInput(table),
    generateSearchableDataValues(table))
}
function toggleSearchable(table) {
  if (table.classList.contains('searching')) {
    const tr = document.getElementById(`tr-${table.id}`)
    ;(tr && tr.remove(), table.classList.remove('searching'))
    const style = document.getElementById('css-' + table.id)
    style && style.remove()
  } else (table.classList.add('searching'), prepareSearchableTable(table))
}
function searchableEventlistener(event) {
  const table = event.target.closest('table.searchable')
  if (!table) return
  const rect = table.getBoundingClientRect()
  ;(event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom) &&
    toggleSearchable(table)
}
typeof document < 'u' && document.addEventListener('click', searchableEventlistener)
export {
  createSearchAbleInput,
  generateRandomId,
  generateSearchableDataValues,
  getSearchableTableCellValue,
  handleSearchableInput,
  prepareSearchableTable,
  searchableEventlistener,
  toggleSearchable,
}
