import type { PinnableItemConnectionProps } from "./components/PinnableItemConnection"
import type { UserProps } from "./components/User"

export interface ViewerProps extends UserProps {
  pinnedItems: PinnableItemConnectionProps
}

const query = `
  query {
    viewer {
      bio
      databaseId
      login
      name
      url
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
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
          }
        }
      }
    }
  }
`

export async function fetchViewer(): Promise<ViewerProps> {
  const token = import.meta.env.GITHUB_TOKEN
  if (!token) {
    throw new Error("Missing GITHUB_TOKEN environment variable")
  }
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
  return data.viewer as ViewerProps
}
