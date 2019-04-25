module.exports = {
  siteMetadata: {
    title: 'Bill\'s Gatsby site',
    author: 'William'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
};
