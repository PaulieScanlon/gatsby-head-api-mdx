module.exports = {
  siteMetadata: {
    title: 'gatsby-head-api-mdx'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
