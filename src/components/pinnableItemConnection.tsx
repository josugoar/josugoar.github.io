import { graphql } from "gatsby"
import React from "react"
import Repository, { RepositoryProps } from "./repository"

interface RepositoryNodeProps extends RepositoryProps {
  id: string
}

export interface PinnableItemConnectionProps {
  nodes: RepositoryNodeProps[]
}

const PinnableItemConnection = ({ nodes }: PinnableItemConnectionProps) => (
  <div className="col-md-8 col-lg-7 py-4" style={{ margin: "0 auto" }}>
    {nodes.map((node) => (
      <Repository
        description={node.description}
        key={node.id}
        languages={node.languages}
        name={node.name}
        openGraphImageUrl={node.openGraphImageUrl}
        repositoryTopics={node.repositoryTopics}
        url={node.url}
        usesCustomOpenGraphImage={node.usesCustomOpenGraphImage}
      />
    ))}
  </div>
)

export default PinnableItemConnection

export const query = graphql`
  fragment PinnableItemConnectionFragment on GitHub_PinnableItemConnection {
    nodes {
      ... on GitHub_Repository {
        id
      }
      ...RepositoryFragment
    }
  }
`
