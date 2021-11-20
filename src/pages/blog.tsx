import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { AllBlogPosts } from '../queries/blogpost'

interface Props {
  data: AllBlogPosts
}

const BlogPage: React.FC<Props> = ({data}) => {
  return (
    <Layout pageTitle="Blog">
      {data.allFile.nodes.map((post, i) => (
        <li key={i}>{post.name}</li>
      ))}
    </Layout>
  )
}

export const allPosts = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage
