import { graphql } from "gatsby"
import React from "react"
import Language, { LanguageProps } from "./language"

export type LanguageConnectionProps = {
  nodes: LanguageProps[]
}

const LanguageConnection = (props: LanguageConnectionProps) => {
  return (
    <div className="p-3">
      <ul className="d-flex flex-wrap f6 list-style-none text-gray">
        {props.nodes.map((node, idx) => (
          <li className="mb-2 mr-4" key={idx}>
            <Language color={node.color} name={node.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageConnection

export const query = graphql`
  fragment LanguageConnectionFragment on GitHub_LanguageConnection {
    nodes {
      ...LanguageFragment
    }
  }
`
