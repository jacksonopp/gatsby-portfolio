import { FileSystemNode } from 'gatsby-source-filesystem'

export interface AllBlogPosts {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string,
        title: string
      },
      id: string,
      body: string
    }[]
  }
}