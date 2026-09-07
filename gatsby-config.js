const { config } = require("dotenv")

config()

const {
  FilterObjectFields,
  FilterTypes,
} = require("@graphql-tools/wrap")

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        transformSchema: ({ schema, link, resolver, defaultTransforms }) => {
          const { wrapSchema } = require("@graphql-tools/wrap")
          const { linkToExecutor } = require("@graphql-tools/links")
          return wrapSchema({
            schema,
            executor: linkToExecutor(link),
            transforms: [
              ...defaultTransforms,
              new FilterObjectFields(
                (typeName, fieldName) =>
                  !(
                    (typeName === "GitHub" && fieldName === "relay") ||
                    (typeName === "GitHub" && fieldName === "_entities")
                  )
              ),
              new FilterTypes(
                (type) => type.name !== "GitHub__Entity"
              ),
            ],
          })
        },
      },
    },
    "gatsby-plugin-sass",
  ],
}
