import { code, repo } from "@primer/octicons"
import { graphql } from "gatsby"
import React from "react"
import LanguageConnection, {
  LanguageConnectionProps,
} from "./languageConnection"
import RepositoryTopicConnection, {
  RepositoryTopicConnectionProps,
} from "./repositoryTopicConnection"

interface RepositoryActionsProps {
  url: string
}

const RepositoryActions = ({ url }: RepositoryActionsProps) => (
  <div className="tabnav px-3 mb-0">
    <nav className="tabnav-tabs" aria-label="Repository menu">
      <a aria-current="true" href={url} className="tabnav-tab f6 px-2 py-1">
        <span
          dangerouslySetInnerHTML={{
            __html: code.toSVG({ class: "text-gray-dark" }),
          }}
        />{" "}
        Code
      </a>
    </nav>
  </div>
)

interface RepositoryContentProps {
  description: string | null
  languages: LanguageConnectionProps
  repositoryTopics: RepositoryTopicConnectionProps
}

const RepositoryContent = ({
  description,
  languages,
  repositoryTopics,
}: RepositoryContentProps) => (
  <div className="border-bottom bg-white">
    <div className="px-3 pt-3">
      <p className="text-gray mb-0" />
      <div>{description}</div>
      <p />
    </div>
    <RepositoryTopicConnection nodes={repositoryTopics.nodes} />
    <LanguageConnection nodes={languages.nodes} />
  </div>
)

interface RepositoryHeaderProps {
  name: string
  url: string
}

const RepositoryHeader = ({ name, url }: RepositoryHeaderProps) => (
  <div className="px-3">
    <div className="d-flex flex-justify-between my-3">
      <div className="d-flex flex-auto">
        <span
          dangerouslySetInnerHTML={{
            __html: repo.toSVG({ class: "text-gray-dark mr-2" }),
          }}
          style={{ marginTop: 2 }}
        />
        <h1 className="f3 text-gray text-normal lh-condensed">
          <a className="text-bold" href={url}>
            {name}
          </a>
        </h1>
      </div>
    </div>
  </div>
)

interface RepositoryMediaProps {
  name: string
  openGraphImageUrl: string
  url: string
}

const RepositoryMedia = ({
  name,
  openGraphImageUrl,
  url,
}: RepositoryMediaProps) => (
  <a
    className="overflow-hidden flex-items-center rounded-top-1 border-black-fade border-bottom d-flex position-relative"
    style={{ maxHeight: 275 }}
    href={url}
  >
    <img
      className="d-block width-full"
      loading="lazy"
      src={openGraphImageUrl}
      alt={name}
    />
  </a>
)

export interface RepositoryProps
  extends RepositoryActionsProps,
    RepositoryContentProps,
    RepositoryHeaderProps,
    RepositoryMediaProps {
  usesCustomOpenGraphImage: boolean
}

const Repository = ({
  description,
  languages,
  name,
  openGraphImageUrl,
  repositoryTopics,
  url,
  usesCustomOpenGraphImage,
}: RepositoryProps) => (
  <article className="border rounded-1 box-shadow bg-gray-light mb-4">
    {usesCustomOpenGraphImage && (
      <RepositoryMedia
        name={name}
        openGraphImageUrl={openGraphImageUrl}
        url={url}
      />
    )}
    <RepositoryHeader name={name} url={url} />
    <RepositoryActions url={url} />
    <RepositoryContent
      description={description}
      languages={languages}
      repositoryTopics={repositoryTopics}
    />
  </article>
)

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
