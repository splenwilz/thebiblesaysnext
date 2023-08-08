interface BibleData {
  id: string
  bibleId: string
  number: string
  bookId: string
  reference: string
  copyright: string
  verseCount: number
  content: string
  next: {
    id: string
    number: string
    bookId: string
  } | null
  previous: {
    id: string
    number: string
    bookId: string
  } | null
}

interface BibleMeta {
  fums: string
  fumsId: string
  fumsJsInclude: string
  fumsJs: string
  fumsNoScript: string
}

interface BibleResponse {
  data: BibleData
  meta: BibleMeta
}
interface useBookProps {
  bookChapter: string
}

interface UseBookReturn {
  bibleChapData: BibleResponse | null
  bibleChapError: string | null
  bibleChapLoading: boolean
}
