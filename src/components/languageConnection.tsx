import { graphql } from "gatsby"
import React from "react"
import Language, { LanguageProps } from "./language"

interface LanguageNodeProps extends LanguageProps {
  id: string
}

export interface LanguageConnectionProps {
  nodes: LanguageNodeProps[]
}

const LanguageConnection = ({ nodes }: LanguageConnectionProps) => (
  <div className="p-3">
    <ul className="d-flex flex-wrap f6 list-style-none text-gray">
      {nodes.map((node) => (
        <li className="mb-2 mr-4" key={node.id}>
          <Language color={node.color} name={node.name} />
        </li>
      ))}
    </ul>
  </div>
)

export default LanguageConnection

export const query = graphql`
  fragment LanguageConnectionFragment on GitHub_LanguageConnection {
    nodes {
      id
      ...LanguageFragment
    }
  }
`
