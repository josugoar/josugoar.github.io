const dotenv = require("dotenv")

dotenv.config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://josugoar.github.io",
    title: "josugoar (Josu)",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
  ],
}
