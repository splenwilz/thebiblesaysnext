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
    case 'exod':
      return 'Exodus'
    case 'lev':
      return 'Leviticus'
    case 'num':
      return 'Numbers'
    case 'deu':
      return 'Deuteronomy'
    case 'deut':
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

export function DefinedBookName(name: string): string | undefined {
  switch (name.toLowerCase()) {
    case 'gen':
      return 'gen'
    case 'exo':
      return 'exo'
    case 'exod':
      return 'exo'

    case 'lev':
      return 'lev'
    case 'num':
      return 'num'
    case 'deu':
      return 'deu'
    case 'deut':
      return 'deu'
    case 'deut':
      return 'Deuteronomy'
    case 'jos':
      return 'jos'
    case 'josh':
      return 'jos'
    case 'jdg':
      return 'jdg'
    case 'rut':
      return 'rut'
    case 'ruth':
      return 'rut'
    case '1sa':
      return '1sa'
    case '1sam':
      return '1sa'
    case '2sa':
      return '2sa'
    case '2sam':
      return '2sa'
    case '1ki':
      return '1ki'
    case '2ki':
      return '2ki'
    case '1ch':
      return '1ch'
    case '2ch':
      return '2ch'
    case 'ezr':
      return 'ezr'
    case 'neh':
      return 'neh'
    case 'est':
      return 'est'
    case 'job':
      return 'Job'
    case 'psa':
      return 'psa'
    case 'ps':
      return 'psa'
    case 'pro':
      return 'pro'
    case 'prov':
      return 'pro'
    case 'ecc':
      return 'ecc'
    case 'eccl':
      return 'ecc'
    case 'sng':
      return 'sng'
    case 'isa':
      return 'isa'
    case 'jer':
      return 'jer'
    case 'lam':
      return 'lam'
    case 'ezk':
      return 'ezk'
    case 'dan':
      return 'dan'
    case 'hos':
      return 'hos'
    case 'jol':
      return 'jol'
    case 'joel':
      return 'jol'
    case 'amo':
      return 'amos'
    case 'oba':
      return 'oba'
    case 'obad':
      return 'oba'
    case 'jonah':
      return 'jonah'
    case 'mic':
      return 'mic'
    case 'nam':
      return 'nam'
    case 'nam':
      return 'nah'
    case 'hab':
      return 'hab'
    case 'zep':
      return 'zep'
    case 'zep':
      return 'zeph'
    case 'hag':
      return 'hag'
    case 'zec':
      return 'zec'
    case 'zec':
      return 'zech'
    case 'mal':
      return 'mal'
    case 'mat':
      return 'mat'
    case 'matt':
      return 'mat'
    case 'mrk':
      return 'mrk'
    case 'mark':
      return 'mrk'
    case 'luk':
      return 'luk'
    case 'luke':
      return 'luk'
    case 'jhn':
      return 'jhn'
    case 'john':
      return 'jhn'
    case 'act':
      return 'act'
    case 'acts':
      return 'act'
    case 'rom':
      return 'rom'
    case '1co':
      return '1 1co'
    case '1cor':
      return '1 1co'
    case '2co':
      return '2co'
    case '2cor':
      return '2co'
    case 'gal':
      return 'gal'
    case 'eph':
      return 'eph'
    case 'php':
      return 'php'
    case 'phil':
      return 'php'
    case 'col':
      return 'col'
    case '1th':
      return '1th'
    case '1thess':
      return '1th'
    case '2thess':
      return '2th'
    case '1ti':
      return '1ti'
    case '1tim':
      return '1ti'
    case '2ti':
      return '2ti'
    case '2tim':
      return '2ti'
    case 'tit':
      return 'tit'
    case 'phm':
      return 'phm'
    case 'phm':
      return 'phlm'
    case 'heb':
      return 'heb'
    case 'jas':
      return 'jas'
    case '1pe':
      return '1pe'
    case '1pet':
      return '1pe'
    case '2pe':
      return '2pe'
    case '2pet':
      return '2pe'
    case '1jhn':
      return '1jhn'
    case '1john':
      return '1jhn'
    case '2jhn':
      return '2jhn'
    case '2john':
      return '2jhn'
    case '3jhn':
      return '3jhn'
    case '3john':
      return '3jhn'
    case 'jud':
      return 'jud'
    case 'rev':
      return 'rev'
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

export function extractVideoLink(input: string): string | null {
  const match = input.match(/src="([^"]+)"/)
  if (match && match.length >= 2) {
    const srcLink = match[1]
    if (srcLink.includes('youtube.com') || srcLink.includes('youtu.be')) {
      return srcLink
    }
  }
  return null
}

export function extractStringBeforeHyphen(inputString: string): string | null {
  const parts = inputString.split('-')
  if (parts.length > 1) {
    return parts[0]
  }
  return inputString
}
