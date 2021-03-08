import { graphql } from "gatsby"
import React from "react"

export type LanguageProps = {
  color: string
  name: string
}

const Language = (props: LanguageProps) => {
  return (
    <span className="f6 my-1 ml-0">
      <span
        className="repo-language-color"
        style={{ backgroundColor: props.color }}
      ></span>{" "}
      <span itemProp="programmingLanguage">{props.name}</span>
    </span>
  )
}

export default Language

export const query = graphql`
  fragment LanguageFragment on GitHub_Language {
    color
    name
  }
`
