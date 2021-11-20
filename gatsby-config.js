module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Jackson Oppenheim Portfolio",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx"
  ],
};
