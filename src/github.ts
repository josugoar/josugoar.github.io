import type { ViewerProps } from "./components/Viewer.astro"
import { repositories } from "../package.json"

export async function fetchViewer(): Promise<ViewerProps> {
  const githubToken = import.meta.env.GITHUB_TOKEN
  const githubLogin = import.meta.env.GITHUB_LOGIN

  if (!githubToken) {
    throw new Error("Missing GITHUB_TOKEN environment variable")
  }

  const query = `
    query {
      viewer: ${githubLogin ? `user(login: "${githubLogin}")` : "viewer"} {
        bio
        databaseId
        login
        name
        url
        ${(repositories as string[])
          .map(
            (name, idx) => `repository${idx}: repository(name: "${name}") {
            id
            description
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              nodes {
                id
                color
                name
              }
            }
            name
            openGraphImageUrl
            repositoryTopics(first: 20) {
              nodes {
                id
                topic {
                  name
                }
              }
            }
            url
            usesCustomOpenGraphImage
          }`,
          )
          .join("\n")}
      }
    }
  `

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${githubToken}`,
    },
    body: JSON.stringify({ query }),
  })

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed: ${response.status} ${response.statusText}`,
    )
  }

  const { data, errors } = await response.json()

  if (errors) {
    throw new Error(`GitHub API errors: ${JSON.stringify(errors)}`)
  }

  const { bio, databaseId, login, name, url, ...repositoryConnection } =
    data.viewer

  const repositoryNodes = Object.values(repositoryConnection).filter(
    (repository) => repository != null,
  )

  return {
    bio,
    databaseId,
    login,
    name,
    url,
    repositories: { nodes: repositoryNodes },
  }
}
