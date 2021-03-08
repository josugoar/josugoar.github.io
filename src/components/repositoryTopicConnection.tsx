import { graphql } from "gatsby"
import React from "react"
import RepositoryTopic, { RepositoryTopicProps } from "./repositoryTopic"

export type RepositoryTopicConnectionProps = {
  nodes: RepositoryTopicProps[]
}

const RepositoryTopicConnection = (props: RepositoryTopicConnectionProps) => {
  return (
    <div className="d-flex flex-wrap border-bottom border-gray-light px-3 pt-2 pb-2">
      {props.nodes.map((node, idx) => (
        <RepositoryTopic key={idx} topic={node.topic} />
      ))}
    </div>
  )
}

export default RepositoryTopicConnection

export const query = graphql`
  fragment RepositoryTopicConnectionFragment on GitHub_RepositoryTopicConnection {
    nodes {
      ...RepositoryTopicFragment
    }
  }
`
