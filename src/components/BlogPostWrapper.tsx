import React from 'react'
import tw from 'twin.macro'

const MarkdownWrapper = tw.article`
h2 {
  @apply bg-purple-400
}
`;

const BlogPostWrapper: React.FC = ({children}) => {
  return (
    <MarkdownWrapper>
      {children}
    </MarkdownWrapper>
  )
}

export default BlogPostWrapper
