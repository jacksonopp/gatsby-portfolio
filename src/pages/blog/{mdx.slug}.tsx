import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import GoBackLink from '../../components/GoBackLink'
import Layout from '../../components/layout'
import { IBlogPost } from '../../queries/blogpost'

interface Props extends PageProps {
  data: IBlogPost,
  page: PageProps
}

const BlogPost: React.FC<Props> = ({data, location}) => {

  const image = getImage(data.mdx.frontmatter.hero_image)
  console.log(location)

  return (
    <Layout pageTitle='Blog post'>
      <GoBackLink>&larr; Go back</GoBackLink>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
}

export const GetPost = graphql`
  query GetPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        title
        hero_image_credit_text
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost
