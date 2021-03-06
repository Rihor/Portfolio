const siteTitle = "Pedro Pinho Portfolio";
const siteDescription = "My portfolio, where I have my projects, skills and info. 🙂";
const siteAuthor = "Pedro Pinho";
const siteUrl = "https://rihor-portfolio.now.sh";
const siteImage = `${siteUrl}/icons/icon_512x512.png`;
const siteKeywords = [
  "portfolio",
  "full-stack",
  "fullstack",
  "developer",
  "gatsby",
  "typescript",
  "javascript",
  "react",
  "rihor",
];

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-react-axe`,
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: `/`,
        background_color: `#2d2d2d`,
        theme_color: `#2d2d2d`,
        display: `minimal-ui`,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
        icon: "src/images/icon.png",
        icons: [
          {
            src: "icons/icon_512x819.png",
            sizes: "512x819",
            types: "image/png",
          },
          {
            src: "icons/icon_120x192.png",
            sizes: "120x192",
            types: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-link-crossorigin`
  ],
};
