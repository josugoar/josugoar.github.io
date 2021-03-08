import { graphql } from "gatsby"
import React from "react"

export type RepositoryTopicProps = {
  topic: {
    name: string
  }
}

const RepositoryTopic = (props: RepositoryTopicProps) => {
  return (
    <span className="topic-tag f6 mb-2" title={`Topic: ${props.topic.name}`}>
      {props.topic.name}
    </span>
  )
}

export default RepositoryTopic

export const query = graphql`
  fragment RepositoryTopicFragment on GitHub_RepositoryTopic {
    topic {
      name
    }
  }
`
