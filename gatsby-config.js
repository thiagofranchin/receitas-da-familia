module.exports = {
  siteMetadata: {
    title: `Manhattan Project`,
    description: `A project make for Decoupled Days 2020`,
    author: `@gatsbyjs`,
    copyright: `© Copyright - All Rights Reserved`,
    siteUrl: `https://manhattan-project-template.com/`,
    socialMedia: {
      github: 'https://github.com/',
      codepen: 'https://codepen.io/',
      facebook: 'https://www.facebook.com.br/',
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
