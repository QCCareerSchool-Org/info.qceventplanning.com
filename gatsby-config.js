module.exports = {
  siteMetadata: {
    title: `QC Event School`,
    description: `Download a free course catalaog`,
    author: `QC Career School`,
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
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `QC Event School`,
        short_name: `QC Event`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [ `300`, `300i`, `400`, `400i`, `700`, `700i` ],
          },
          {
            family: `Playfair Display`,
            variants: [ `400`, `700` ],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `UA-3632503-10`,
          `AW-1071836607`,
        ],
        gtagConfig: {
          site_speed_sample_rate: 100,
          optimize_id: 'GTM-MK3SKDL',
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: '1725004270923176',
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        // Don't cache cypress files in /__ or /__cypress folders
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /^https?:.*\/__(cypress)?\//, // this will also match https://example.com/some/other/dir/__
              handler: `NetworkOnly`,
            },
          ],
        },
      },
    },
  ],
};

