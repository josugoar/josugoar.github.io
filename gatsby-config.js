const dotenv = require("dotenv")

dotenv.config()

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
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        // TODO: Generate name automatically
        // TODO: Add leftover fields
        name: "josugoar.github.io",
        start_url: "/",
        icon: "./src/images/icon.png",
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          // TODO: Ensure correct path
          globPatterns: ["**/icon.png"],
        },
      },
    },
    "gatsby-plugin-sass",
  ],
}
