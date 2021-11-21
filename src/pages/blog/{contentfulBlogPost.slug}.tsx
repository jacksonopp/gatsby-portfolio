import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import GoBackLink from '../../components/GoBackLink';
import Layout from '../../components/layout';
import { IContentfulBlogPost } from '../../queries/contentful';
import styled from "@emotion/styled";
import tw from 'twin.macro'

interface Props extends PageProps {
  data: IContentfulBlogPost;
  page: PageProps;
}


const MarkdownWrapper = styled.article`
  h2 {
    ${tw`text-2xl text-purple-700`}
  }
  p {
    ${tw`my-2`}
  }
`;

const BlogPost: React.FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <Layout pageTitle={data.contentfulBlogPost.title}>
      <GoBackLink>&larr; Go back</GoBackLink>
      <header className='border-2 border-purple-300 bg-gray-50 p-2 rounded-md'>
        <p>
          {data.contentfulBlogPost.author.name} - {data.contentfulBlogPost.author.title}
        </p>
        <p className='text-xs'>{data.contentfulBlogPost.author.shortBio.shortBio}</p>
      </header>
      <MarkdownWrapper>
        <MDXRenderer>{data.contentfulBlogPost.body.childMdx.body}</MDXRenderer>
      </MarkdownWrapper>
    </Layout>
  );
};

export const GetPost = graphql`
  query ContentfulBlogPost($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      body {
        childMdx {
          body
        }
      }
      author {
        github
        name
        company
        shortBio {
          shortBio
        }
        title
        twitter
      }
      title
    }
  }
`;

export default BlogPost;
