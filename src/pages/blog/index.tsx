import React from 'react'
import Layout from '../../components/layout'
import { graphql, Link, PageProps } from 'gatsby'
import { IAllContentfulBlogPosts } from '../../queries/contentful'

interface Props extends PageProps {
  data: IAllContentfulBlogPosts
}

const BlogPage: React.FC<Props> = ({data}) => {
  return (
    <Layout pageTitle="Blog Posts">
      {data.allContentfulBlogPost.nodes.map((post) => (
        <div key={post.id} className="mb-4">
          <h2 className="text-2xl text-purple-700">{post.title}</h2>
          <p className="text-xs text-purple-700">By: {post.author.name} {' - '} {post.publishDate}</p>
          <Link to={post.slug} className="link">Read post &rarr;</Link>
        </div>
      ))}
    </Layout>
  )
}

export const allBlogPosts = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        title
        author {
          name
        }
        id
        publishDate(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`;

export default BlogPage
