import { graphql } from "gatsby"
import React from "react"

export interface RepositoryTopicProps {
  topic: {
    name: string
  }
}

const RepositoryTopic = ({ topic: { name } }: RepositoryTopicProps) => (
  <span className="topic-tag f6 mb-2" title={`Topic: ${name}`}>
    {name}
  </span>
)

export default RepositoryTopic

export const query = graphql`
  fragment RepositoryTopicFragment on GitHub_RepositoryTopic {
    topic {
      name
    }
  }
`
