import { graphql } from "gatsby"
import React from "react"
import PinnableItemConnectionHeader from "./pinnableItemConnectionHeader"
import Repository, { RepositoryProps } from "./repository"

export type PinnableItemConnectionProps = {
  nodes: RepositoryProps[]
}

const PinnableItemConnection = (props: PinnableItemConnectionProps) => {
  return (
    <div className="col-md-8 col-lg-7 py-4" style={{ margin: "0 auto" }}>
      <PinnableItemConnectionHeader />
      {props.nodes.map((node, idx) => (
        <Repository
          description={node.description}
          key={idx}
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
}

export default PinnableItemConnection

export const query = graphql`
  fragment PinnableItemConnectionFragment on GitHub_PinnableItemConnection {
    nodes {
      ...RepositoryFragment
    }
  }
`
