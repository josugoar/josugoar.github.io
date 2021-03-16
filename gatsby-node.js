const fs = require("fs")
const fetch = require("node-fetch")
const stream = require("stream")

const download = async (url, path, callback) => {
  const response = await fetch(url)
  stream.pipeline(response.body, fs.createWriteStream(path), callback)
}

exports.createPages = async ({ graphql, reporter }) => {
  const result = await graphql(`
    query gatsbyNodeQuery {
      github {
        viewer {
          avatarUrl
        }
      }
    }
  `)
  await download(
    result.data.github.viewer.avatarUrl,
    "./src/images/icon.png",
    () => {
      reporter.info("Hello")
    }
  )
}
