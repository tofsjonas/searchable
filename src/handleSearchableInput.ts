export function handleSearchableInput(input: HTMLInputElement, table: HTMLTableElement) {
  const filter = input.value.toLowerCase()

  let style = document.getElementById('css-' + table.id) as HTMLStyleElement
  if (!style) {
    style = document.createElement('style')
    style.id = 'css-' + table.id
    document.head.appendChild(style)
  }
  let css = ''

  if (filter) {
    css = `#${table.id} tbody tr{display:none;}
#${table.id} tbody tr:has([data-val*="${filter}"]){display:table-row;}`
  }

  style!.innerHTML = css
}
