import React from "react"
import RepositoryTopic, { type RepositoryTopicProps } from "./RepositoryTopic"

interface RepositoryTopicNodeProps extends RepositoryTopicProps {
  id: string
}

export interface RepositoryTopicConnectionProps {
  nodes: RepositoryTopicNodeProps[]
}

const RepositoryTopicConnection = ({
  nodes,
}: RepositoryTopicConnectionProps) => (
  <div className="d-flex flex-wrap border-bottom color-border-default px-3 pt-2 pb-2">
    {nodes.map(({ id, ...node }, idx) => (
      <React.Fragment key={id}>
        <RepositoryTopic {...node} />
        {idx < nodes.length - 1 && "\u00A0"}
      </React.Fragment>
    ))}
  </div>
)

export default RepositoryTopicConnection
