/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Info Times`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "times",
        "path": `${__dirname}/times`
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss"]
};