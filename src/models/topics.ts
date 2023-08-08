interface ToughTopic {
  id: number
  topic_category: string
  topic_title: string
  image_url: string
  image_width: string
  image_height: string
  summary: string
  topic_text: string
  link: string
}
interface ToughTopics {
  data: ToughTopic[]
}

interface BlogPost {
  slug: string
  title: string
  summary: string
  content: string
  image_url: string
}
