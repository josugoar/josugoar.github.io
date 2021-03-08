const dotenv = require("dotenv")

dotenv.config()

module.exports = {
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
