export interface AllBlogPosts {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string,
        title: string
      },
      id: string,
      slug: string
    }[]
  }
}

export interface blogPost {
  mdx: {
    frontmatter: {
      date: string,
      title: string
    },
    body: string
  }
}