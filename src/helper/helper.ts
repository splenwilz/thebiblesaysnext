interface ScriptureParts {
  book: string
  chapter?: string
  verse?: string
}

export function getBookName(name: string): string | undefined {
  switch (name.toLowerCase()) {
    case 'gen':
      return 'Genesis'
    case 'exo':
      return 'Exodus'
    case 'lev':
      return 'Leviticus'
    case 'num':
      return 'Numbers'
    case 'deu':
      return 'Deuteronomy'
    case 'jos':
      return 'Joshua'
    case 'jdg':
      return 'Judges'
    case 'rut':
      return 'Ruth'
    case '1sa':
      return '1 Samuel'
    case '2sa':
      return '2 Samuel'
    case '1ki':
      return '1 Kings'
    case '2ki':
      return '2 Kings'
    case '1ch':
      return '1 Chronicles'
    case '2ch':
      return '2 Chronicles'
    case 'ezr':
      return 'Ezra'
    case 'neh':
      return 'Nehemiah'
    case 'est':
      return 'Esther'
    case 'job':
      return 'Job'
    case 'psa':
      return 'Psalm'
    case 'pro':
      return 'Proverbs'
    case 'ecc':
      return 'Ecclesiastes'
    case 'sng':
      return 'Song of Solomon'
    case 'isa':
      return 'Isaiah'
    case 'jer':
      return 'Jeremiah'
    case 'lam':
      return 'Lamentations'
    case 'ezk':
      return 'Ezekiel'
    case 'dan':
      return 'Daniel'
    case 'hos':
      return 'Hosea'
    case 'jol':
      return 'Joel'
    case 'amo':
      return 'Amos'
    case 'oba':
      return 'Obadiah'
    case 'jonah':
      return 'Jonah'
    case 'mic':
      return 'Micah'
    case 'nam':
      return 'Nahum'
    case 'hab':
      return 'Habakkuk'
    case 'zep':
      return 'Zephaniah'
    case 'hag':
      return 'Haggai'
    case 'zec':
      return 'Zechariah'
    case 'mal':
      return 'Malachi'
    case 'mat':
      return 'Matthew'
    case 'mrk':
      return 'Mark'
    case 'luk':
      return 'Luke'
    case 'jhn':
      return 'john'
    case 'act':
      return 'Acts'
    case 'rom':
      return 'Romans'
    case '1co':
      return '1 Corinthians'
    case '2co':
      return '2 Corinthians'
    case 'gal':
      return 'Galatians'
    case 'eph':
      return 'Ephesians'
    case 'php':
      return 'Philippians'
    case 'col':
      return 'Colossians'
    case '1th':
      return '1 Thessalonians'
    case '2th':
      return '2 Thessalonians'
    case '1ti':
      return '1 Timothy'
    case '2ti':
      return '2 Timothy'
    case 'tit':
      return 'Titus'
    case 'phm':
      return 'Philemon'
    case 'heb':
      return 'Hebrews'
    case 'jas':
      return 'James'
    case '1pe':
      return '1 Peter'
    case '2pe':
      return '2 Peter'
    case '1jhn':
      return '1 John'
    case '2jhn':
      return '2 John'
    case '3jhn':
      return '3 John'
    case 'jud':
      return 'Jude'
    case 'rev':
      return 'Revelation'
    default:
      return undefined // Return undefined for unknown/invalid short forms
  }
}

export function splitScripture(scripture: string): ScriptureParts | null {
  const parts = scripture.match(
    /^(\d?[A-Za-z]+)(\+\d+(\.\d+)?(-\d+(\.\d+)?)?)?$/,
  )

  if (!parts) {
    return null // Invalid format
  }

  const [_, book, chapterAndVerse] = parts
  let chapter = ''
  let verse = ''

  if (chapterAndVerse) {
    const chapterVerseParts = chapterAndVerse.split('.')
    chapter = chapterVerseParts[0].replace(/^\+/, '') // Remove the preceding '+'
    verse = chapterVerseParts[1] || ''
  }

  return {
    book,
    chapter,
    verse,
  }
}
