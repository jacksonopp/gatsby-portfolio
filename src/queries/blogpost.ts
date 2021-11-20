import { ImageDataLike } from "gatsby-plugin-image";

export interface IAllBlogPosts {
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

export interface IBlogPost {
  mdx: {
    frontmatter: {
      date: string,
      title: string,
      hero_image_credit_text: string,
      hero_image_alt: string,
      hero_image: ImageDataLike
    },
    body: string
  }
}