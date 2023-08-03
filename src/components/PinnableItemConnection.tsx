import { graphql } from "gatsby"
import React from "react"
import Repository, { RepositoryProps } from "./Repository"

interface RepositoryNodeProps extends RepositoryProps {
  id: string
}

export interface PinnableItemConnectionProps {
  nodes: RepositoryNodeProps[]
}

const PinnableItemConnection = ({ nodes }: PinnableItemConnectionProps) => (
  <div className="col-md-8" style={{ margin: "auto" }}>
    {nodes.map(({ id, ...node }) => (
      <Repository key={id} {...node} />
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
