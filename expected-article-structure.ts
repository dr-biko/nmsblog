// This is a representation of the expected Prismic article document structure
// Not actual code - for illustration purposes

interface PrismicArticle {
  id: string
  uid: string
  type: "article"
  data: {
    title: RichTextBlock[] // Rich text array
    summary: RichTextBlock[] // Rich text array
    featured_image: {
      url: string
      alt?: string
      dimensions?: { width: number; height: number }
    }
    category: {
      id: string
      type: "category_name"
      data?: {
        name: RichTextBlock[]
      }
    }
    date: string // ISO date string
    author: {
      id: string
      type: "author"
      data: {
        nursing: RichTextBlock[] // Rich text array for author name/info
        nursingmadesimple: {
          // Additional author data
          // Structure may vary
        }
      }
    }
    slices: Array<{
      slice_type: string // "text", "image", "quote", "callout", etc.
      slice_label: string | null
      primary: {
        // For text slices
        text?: RichTextBlock[] // Rich text content

        // For image slices
        image?: {
          url: string
          alt?: string
          dimensions?: { width: number; height: number }
        }
        caption?: RichTextBlock[]

        // For quote slices
        quote_text?: RichTextBlock[]
        attribution?: RichTextBlock[]

        // For callout slices
        callout_title?: RichTextBlock[]
        callout_text?: RichTextBlock[]
      }
      items?: Array<any> // For repeatable sections within a slice
    }>
  }
}

// Rich text block structure (simplified)
interface RichTextBlock {
  type: string // "paragraph", "heading2", etc.
  text: string
  spans: Array<any> // For formatting
}

