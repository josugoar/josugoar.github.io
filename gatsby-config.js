const { config } = require("dotenv")

config()

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
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "josugoar.github.io",
    //     short_name: "josugoar",
    //     start_url: "/",
    //     background_color: "#fff",
    //     display: "standalone",
    //     icon: "./src/images/icon.svg",
    //     icon_options: {
    //       purpose: "maskable",
    //     },
    //   },
    // },
    // "gatsby-plugin-offline",
    "gatsby-plugin-sass",
  ],
}
