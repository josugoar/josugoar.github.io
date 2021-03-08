const fs = require("fs")
const fetch = require("node-fetch")
const { buildClientSchema } = require("graphql")
const { createHttpLink } = require("apollo-link-http")

module.exports = {
  siteMetadata: {
    title: "josugoar.github.io",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        createLink: () => {
          return createHttpLink({
            uri: "https://api.github.com/graphql",
            headers: {
              Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          })
        },
        createSchema: async () => {
          const json = JSON.parse(fs.readFileSync(`${__dirname}/github.json`))
          return buildClientSchema(json.data)
        },
        fieldName: "github",
        typeName: "GitHub",
      },
    },
  ],
}
