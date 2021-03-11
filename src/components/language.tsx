import { graphql } from "gatsby"
import React from "react"

export interface LanguageProps {
  color: string
  name: string
}

const Language = ({ color, name }: LanguageProps) => (
  <span className="f6 my-1 ml-0">
    <span
      className="repo-language-color"
      style={{ backgroundColor: color }}
    />{" "}
    <span itemProp="programmingLanguage">{name}</span>
  </span>
)

export default Language

export const query = graphql`
  fragment LanguageFragment on GitHub_Language {
    color
    name
  }
`
