import React from "react"
import Topic, { TopicProps } from "./topic"

export type RepositoryTopicProps = {
  id: string
  topic: TopicProps
}

const RepositoryTopic = (props: RepositoryTopicProps) => {
  return (
    <li key={props.id}>
      <Topic name={props.topic.name} />
    </li>
  )
}

export default RepositoryTopic
