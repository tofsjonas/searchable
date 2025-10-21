export function getSearchableTableCellValue(element: HTMLTableCellElement): string | number {
  if (!element) return ''
  if (element.dataset.sort !== undefined) return element.dataset.sort

  const first_child = element.firstChild
  if (first_child) {
    switch (first_child.nodeName) {
      case 'TIME':
        return (first_child as HTMLTimeElement).dateTime
      case 'DATA':
        return (first_child as HTMLDataElement).value
      case 'METER':
        return (first_child as HTMLMeterElement).value
      case 'PROGRESS':
        return (first_child as HTMLProgressElement).value
      case 'ABBR':
        return (first_child as HTMLElement).title
    }
  }

  return (element.textContent ?? '').trim()
}
