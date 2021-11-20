import { graphql } from 'gatsby';

export interface AllBlogPosts {
  allFile: {
    nodes: {
      name: string
    }[]
  }
}