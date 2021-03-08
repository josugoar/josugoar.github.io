import React from "react"
import LanguageConnection, {
  LanguageConnectionProps,
} from "./languageConnection"
import RepositoryTopicConnection, {
  RepositoryTopicConnectionProps,
} from "./repositoryTopicConnection"

export type RepositoryContentProps = {
  description: string
  languages: LanguageConnectionProps
  repositoryTopics: RepositoryTopicConnectionProps
}

const RepositoryContent = (props: RepositoryContentProps) => {
  return (
    <div className="border-bottom bg-white">
      <div className="px-3 pt-3">
        <p className="color-text-secondary mb-0"></p>
        <div>{props.description}</div>
        <p></p>
      </div>
      <RepositoryTopicConnection nodes={props.repositoryTopics.nodes} />
      <LanguageConnection nodes={props.languages.nodes} />
    </div>
  )
}

export default RepositoryContent
