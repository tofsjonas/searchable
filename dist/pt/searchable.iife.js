;(function (document) {
  //#region src/generateSearchableDataValues.ts
  var e = !1,
    t = !1
  async function n(n) {
    if (e) {
      t = !0
      return
    }
    e = !0
    do {
      t = !1
      let e = n.querySelectorAll('tbody td:not([data-val])')
      for (let t = 0; t < e.length; t++) e[t].setAttribute('data-val', (e[t].textContent ?? '').trim().toLowerCase())
    } while (t)
    e = !1
  }
  //#endregion
  //#region src/handleSearchableInput.ts
  function r(e, t) {
    let n = e.value.toLowerCase(),
      r = document.getElementById('css-' + t.id)
    r || ((r = document.createElement('style')), (r.id = 'css-' + t.id), document.head.appendChild(r))
    let i = ''
    ;(n &&
      (i = `#${t.id} tbody tr{display:none;}
#${t.id} tbody tr:has([data-val*="${n}"]){display:table-row;}`),
      (r.innerHTML = i))
  }
  //#endregion
  //#region src/createSearchableInput.ts
  var i = document.currentScript.dataset ?? {}
  function a(e) {
    let t = e.tHead.querySelector('input[type="search"]')
    if (!t) {
      ;((t = document.createElement('input')),
        (t.type = 'search'),
        (t.placeholder = e.dataset.sbPlaceholder ?? i.sbPlaceholder ?? 'Pesquisar...'),
        (t.className = e.dataset.sbInputClass ?? i.sbInputClass ?? ''))
      let a = document.createElement('td')
      ;((a.colSpan = e.tHead.rows[0].cells.length || 1), a.appendChild(t))
      let o = document.createElement('tr')
      ;((o.id = `tr-${e.id}`),
        o.appendChild(a),
        e.tHead.appendChild(o),
        t.addEventListener('input', () => {
          ;(n(e), r(t, e))
        }))
    }
    t.focus()
  }
  //#endregion
  //#region src/generateRandomId.ts
  function o() {
    return /* @__PURE__ */ new Date().getTime().toString(36) + '-' + Math.random().toString(36).substring(2, 9)
  }
  //#endregion
  //#region src/prepareSearchableTable.ts
  function s(e) {
    ;((e.id ||= 'sb-' + o()), a(e), n(e))
  }
  //#endregion
  //#region src/toggleSearchable.ts
  function c(e) {
    if (e.classList.contains('searching')) {
      let t = document.getElementById(`tr-${e.id}`)
      ;(t && t.remove(), e.classList.remove('searching'))
      let n = document.getElementById('css-' + e.id)
      n && n.remove()
    } else (e.classList.add('searching'), s(e))
  }
  //#endregion
  //#region src/searchableEventListener.ts
  function l(e) {
    if (e.target.nodeName !== 'TABLE') return
    let t = e.target.closest('table.searchable')
    t && c(t)
  }
  //#endregion
  //#region src/index.ts
  typeof document < 'u' && document.addEventListener('click', l)
  //#endregion
})(document)
