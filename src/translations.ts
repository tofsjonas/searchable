export const translations = {
  en: {
    // English
    placeholder: 'Search...',
    empty: 'No results found',
    icon: '🔎',
  },
  sv: {
    // Swedish
    placeholder: 'Sök...',
    empty: 'Inga resultat',
    icon: '🔎',
  },
  da: {
    // Danish
    placeholder: 'Søg...',
    empty: 'Ingen resultater',
    icon: '🔎',
  },
  no: {
    // Norwegian
    placeholder: 'Søk...',
    empty: 'Ingen resultater',
    icon: '🔎',
  },
  fi: {
    // Finnish
    placeholder: 'Hae...',
    empty: 'Ei tuloksia',
    icon: '🔎',
  },
  de: {
    // German
    placeholder: 'Suchen...',
    empty: 'Keine Ergebnisse gefunden',
    icon: '🔎',
  },
  fr: {
    // French
    placeholder: 'Rechercher...',
    empty: 'Aucun résultat trouvé',
    icon: '🔎',
  },
  es: {
    // Spanish
    placeholder: 'Buscar...',
    empty: 'No se encontraron resultados',
    icon: '🔎',
  },
  it: {
    // Italian
    placeholder: 'Cerca...',
    empty: 'Nessun risultato trovato',
    icon: '🔎',
  },
  pt: {
    // Portuguese
    placeholder: 'Pesquisar...',
    empty: 'Nenhum resultado encontrado',
    icon: '🔎',
  },
  nl: {
    // Dutch
    placeholder: 'Zoeken...',
    empty: 'Geen resultaten gevonden',
    icon: '🔎',
  },
  pl: {
    // Polish
    placeholder: 'Szukaj...',
    empty: 'Nie znaleziono wyników',
    icon: '🔎',
  },
  ru: {
    // Russian
    placeholder: 'Поиск...',
    empty: 'Результатов не найдено',
    icon: '🔎',
  },
  ja: {
    // Japanese
    placeholder: '検索...',
    empty: '結果が見つかりません',
    icon: '🔎',
  },
  zh: {
    // Chinese
    placeholder: '搜索...',
    empty: '未找到结果',
    icon: '🔎',
  },
  ko: {
    // Korean
    placeholder: '검색...',
    empty: '결과를 찾을 수 없습니다',
    icon: '🔎',
  },
  ar: {
    // Arabic
    placeholder: 'بحث...',
    empty: 'لم يتم العثور على نتائج',
    icon: '🔎',
  },
  tr: {
    // Turkish
    placeholder: 'Ara...',
    empty: 'Sonuç bulunamadı',
    icon: '🔎',
  },
  cs: {
    // Czech
    placeholder: 'Hledat...',
    empty: 'Nebyly nalezeny žádné výsledky',
    icon: '🔎',
  },
  el: {
    // Greek
    placeholder: 'Αναζήτηση...',
    empty: 'Δεν βρέθηκαν αποτελέσματα',
    icon: '🔎',
  },
  he: {
    // Hebrew
    placeholder: 'חיפוש...',
    empty: 'לא נמצאו תוצאות',
    icon: '🔎',
  },
  hi: {
    // Hindi
    placeholder: 'खोजें...',
    empty: 'कोई परिणाम नहीं मिला',
    icon: '🔎',
  },
  hu: {
    // Hungarian
    placeholder: 'Keresés...',
    empty: 'Nem találhatók eredmények',
    icon: '🔎',
  },
  id: {
    // Indonesian
    placeholder: 'Cari...',
    empty: 'Tidak ada hasil yang ditemukan',
    icon: '🔎',
  },
  ro: {
    // Romanian
    placeholder: 'Căutare...',
    empty: 'Nu s-au găsit rezultate',
    icon: '🔎',
  },
  th: {
    // Thai
    placeholder: 'ค้นหา...',
    empty: 'ไม่พบผลลัพธ์',
    icon: '🔎',
  },
  uk: {
    // Ukrainian
    placeholder: 'Пошук...',
    empty: 'Результатів не знайдено',
    icon: '🔎',
  },
  vi: {
    // Vietnamese
    placeholder: 'Tìm kiếm...',
    empty: 'Không tìm thấy kết quả',
    icon: '🔎',
  },
}

export type Language = keyof typeof translations
export const default_language: Language = 'en'
export const supported_languages: Language[] = Object.keys(translations) as Language[]
export const translation_keys: string[] = Object.keys(translations.en)
