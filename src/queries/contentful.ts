export interface IAllContentfulBlogPosts {
  allContentfulBlogPost: {
    nodes: {
      title: string,
      author: {
        name: string
      },
      id,
      publishDate: string,
      slug: string
    }[]
  }
}

export interface IContentfulBlogPost {
  contentfulBlogPost: {
    body: {
      childMdx: {
        body: string
      }
    },
    author: {
      github: string,
      name: string,
      company: string,
      shortBio: {
        shortBio: string
      },
      title: string,
      twitter: string
    }
    title: string
  }
}