let running = false
let rerun = false

export async function generateSearchableDataValues(table: HTMLTableElement): Promise<void> {
  if (running) {
    rerun = true
    return
  }
  running = true
  do {
    rerun = false
    // Do your work here
    const cells = table.querySelectorAll('tbody td:not([data-val])') as NodeListOf<HTMLTableCellElement>
    for (let i = 0; i < cells.length; i++) {
      cells[i].setAttribute('data-val', (cells[i].textContent ?? '').trim().toLowerCase())
    }
  } while (rerun)
  running = false
}
