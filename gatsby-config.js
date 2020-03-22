module.exports = {
  siteMetadata: {
    title: `Break the clouds`,
    description: `Positive, optimistic and feel-good headlines regarding the corona pandemic every time you open a new page in your browser.`,
    author: `@wirtzdan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `break-the-clouds`,
        short_name: `btc`,
        start_url: `/`,
        background_color: `#34495D`,
        theme_color: `#34495D`,
        display: `minimal-ui`,
        icon: `src/images/btc-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Rajdhani"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
