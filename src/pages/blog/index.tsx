import React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { IAllBlogPosts } from '../../queries/blogpost'

interface Props {
  data: IAllBlogPosts
}

const BlogPage: React.FC<Props> = ({data}) => {

  return (
    <Layout pageTitle="Blog">
      {data.allMdx.nodes.map((post) => (
        <article key={post.id} className="mb-4">
          <header>
            <h2 className="text-2xl text-purple-700">{post.frontmatter.title}</h2>
            <p className="text-purple-700 text-xs align-baseline">Posted: {post.frontmatter.date}</p>
          </header>
          <Link to={post.slug} className="link">Read post &rarr;</Link>
        </article>
      ))}
    </Layout>
  )
}

export const allPosts = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage
