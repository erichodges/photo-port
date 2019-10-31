require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// The normal dotenv config works in development, see if the above works in production
// require('dotenv').config();

console.log(process.env.CLOUDINARY_CLOUD_NAME);  // Test dotenv

module.exports = {
  siteMetadata: {
    title: `Gatsby Cloudinary Test`,
    description: `Testing images from Cloudinary in Gatsby`,
    author: `Eric Hodges`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: 'gatsby-cloudinary'
      },  
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-cloudinary-test`,
        short_name: `cloudinary-test`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
