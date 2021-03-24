const { createWriteStream } = require("fs")
const fetch = require("node-fetch")
const { pipeline } = require("stream")
const { promisify } = require("util")

const path = "./static/favicon.ico"

const query = `
  query {
    github {
      viewer {
        avatarUrl
      }
    }
  }
`

const streamPipeline = promisify(pipeline)

exports.createPages = async ({ graphql }) => {
  const {
    data: {
      github: {
        viewer: { avatarUrl },
      },
    },
  } = await graphql(query)
  const { body } = await fetch(avatarUrl)
  await streamPipeline(body, createWriteStream(path))
}
