import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../../components/layout'

interface Props {
  data: any
}

const BlogPost: React.FC<Props> = ({data}) => {
  return (
    <Layout pageTitle="Blog post">
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const GetPost = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      body
    }
  }
`;

export default BlogPost
