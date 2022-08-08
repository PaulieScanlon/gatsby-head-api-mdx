module.exports = {
  siteMetadata: {
    title: 'gatsby-head-api-mdx',
    description: 'Example repo for using the Gatsby Head API with MDX'
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    }
  ]
};
