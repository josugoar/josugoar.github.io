import { graphql } from "gatsby"
import React from "react"
import RepositoryTopic, { RepositoryTopicProps } from "./RepositoryTopic"

interface RepositoryTopicNodeProps extends RepositoryTopicProps {
  id: string
}

export interface RepositoryTopicConnectionProps {
  nodes: RepositoryTopicNodeProps[]
}

const RepositoryTopicConnection = ({ nodes }: RepositoryTopicConnectionProps) => (
  <div className="d-flex flex-wrap border-bottom border-gray-light px-3 pt-2 pb-2">
    {nodes.map(({ id, ...node }) => (
      <RepositoryTopic key={id} {...node} />
    ))}
  </div>
)

export default RepositoryTopicConnection

export const query = graphql`
  fragment RepositoryTopicConnectionFragment on GitHub_RepositoryTopicConnection {
    nodes {
      id
      ...RepositoryTopicFragment
    }
  }
`
