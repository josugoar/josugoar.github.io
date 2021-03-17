const { createWriteStream } = require("fs")
const fetch = require("node-fetch")
const { pipeline } = require("stream")
const { promisify } = require("util")

const streamPipeline = promisify(pipeline)

exports.createPages = async ({ graphql }) => {
  const {
    data: {
      github: {
        viewer: { avatarUrl },
      },
    },
  } = await graphql(`
    query {
      github {
        viewer {
          avatarUrl
        }
      }
    }
  `)
  const { body } = await fetch(avatarUrl)
  await streamPipeline(body, createWriteStream("./static/favicon.ico"))
}
