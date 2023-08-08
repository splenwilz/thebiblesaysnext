interface CommentaryPost {
  post_id: string
  post_title: string
  post_content: string
  post_excerpt: string
}

interface useCommentaryProps {
  commentary: string
}

interface useCommReturn {
  dataComm: CommentaryPost[] | null
  errorComm: string | null
  loadingComm: boolean
}
