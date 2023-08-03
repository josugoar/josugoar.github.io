import { graphql } from "gatsby"
import React from "react"
import Language, { LanguageProps } from "./Language"

interface LanguageNodeProps extends LanguageProps {
  id: string
}

export interface LanguageConnectionProps {
  nodes: LanguageNodeProps[]
}

const LanguageConnection = ({ nodes }: LanguageConnectionProps) => (
  <div className="p-3">
    <ul className="d-flex flex-wrap f6 list-style-none color-text-secondary">
      {nodes.map(({ id, ...node }) => (
        <li className="mb-2 mr-4" key={id}>
          <Language {...node} />
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
