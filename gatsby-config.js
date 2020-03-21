module.exports = {
  siteMetadata: {
    title: `Uplifting Corona News`,
    description: `Good news only.`,
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
        name: `uplifting-corona-news`,
        short_name: `ucn`,
        start_url: `/`,
        background_color: `#34495D`,
        theme_color: `#34495D`,
        display: `minimal-ui`,
        icon: `src/images/ucn-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Bree Serif"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
