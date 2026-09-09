import type { ViewerProps } from "./components/Viewer.astro"
import { repositories as configuredRepositories } from "../package.json"

const repositoryFragment = `
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
`

function parseRepositories(): string[] {
  const names: string[] = configuredRepositories
  return names
    .map((entry) => entry.trim())
    .filter((name) => name.length > 0 && !name.includes("/"))
}

function buildQuery(login: string | undefined, repositories: string[]): string {
  const subject = login ? `subject: user(login: "${login}")` : "subject: viewer"
  if (repositories.length === 0) {
    return `
      query {
        ${subject} {
          bio
          databaseId
          login
          name
          url
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                ${repositoryFragment}
              }
            }
          }
        }
      }
    `
  }
  return `
    query {
      ${subject} {
        bio
        databaseId
        login
        name
        url
        ${repositories
          .map(
            (name, index) =>
              `repo${index}: repository(name: "${name}") { ${repositoryFragment} }`,
          )
          .join("\n")}
      }
    }
  `
}

export async function fetchViewer(): Promise<ViewerProps> {
  const token = import.meta.env.GITHUB_TOKEN
  if (!token) {
    throw new Error("Missing GITHUB_TOKEN environment variable")
  }
  const login = import.meta.env.GITHUB_LOGIN || undefined
  const repositories = parseRepositories()
  const query = buildQuery(login, repositories)
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
  if (repositories.length === 0) {
    const { pinnedItems, ...subject } = data.subject
    return {
      ...subject,
      repositories: pinnedItems,
    } as ViewerProps
  }
  return {
    bio: data.subject.bio,
    databaseId: data.subject.databaseId,
    login: data.subject.login,
    name: data.subject.name,
    url: data.subject.url,
    repositories: {
      nodes: repositories
        .map((_, index) => data.subject[`repo${index}`])
        .filter((repository) => repository != null),
    },
  }
}
