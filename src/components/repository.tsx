import { graphql } from "gatsby"
import React from "react"
import { LanguageConnectionProps } from "./languageConnection"
import RepositoryMedia from "./repositoryMedia"
import RepositoryContent from "./repositoryContent"
import RepositoryHeader from "./repositoryHeader"
import RepositoryNavigation from "./repositoryNavigation"
import { RepositoryTopicConnectionProps } from "./repositoryTopicConnection"

export type RepositoryProps = {
  description: string | null
  languages: LanguageConnectionProps
  name: string
  openGraphImageUrl: string
  repositoryTopics: RepositoryTopicConnectionProps
  url: string
  usesCustomOpenGraphImage: boolean
}

const Repository = (props: RepositoryProps) => {
  return (
    <article className="border rounded-1 box-shadow bg-gray-light my-4">
      {props.usesCustomOpenGraphImage && (
        <RepositoryMedia
          name={props.name}
          openGraphImageUrl={props.openGraphImageUrl}
          url={props.url}
        />
      )}
      <RepositoryHeader name={props.name} url={props.url} />
      <RepositoryNavigation url={props.url} />
      <RepositoryContent
        description={props.description}
        languages={props.languages}
        repositoryTopics={props.repositoryTopics}
      />
    </article>
  )
}

export default Repository

export const query = graphql`
  fragment RepositoryFragment on GitHub_Repository {
    description
    languages(first: 10) {
      ...LanguageConnectionFragment
    }
    name
    openGraphImageUrl
    repositoryTopics(first: 20) {
      ...RepositoryTopicConnectionFragment
    }
    url
    usesCustomOpenGraphImage
  }
`
