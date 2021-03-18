import { code, repo } from "@primer/octicons"
import { graphql } from "gatsby"
import React from "react"
import LanguageConnection, {
  LanguageConnectionProps,
} from "./LanguageConnection"
import RepositoryTopicConnection, {
  RepositoryTopicConnectionProps,
} from "./RepositoryTopicConnection"

export interface RepositoryProps {
  description: string | null
  languages: LanguageConnectionProps
  name: string
  openGraphImageUrl: string
  repositoryTopics: RepositoryTopicConnectionProps
  url: string
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
}: RepositoryProps) => {
  const menu = [{ name: "Code", path: url }]
  return (
    <article className="border rounded-1 box-shadow bg-gray-light mb-4">
      {usesCustomOpenGraphImage && (
        <a
          className="overflow-hidden flex-items-center rounded-top-1 border-black-fade border-bottom d-flex position-relative"
          style={{ maxHeight: 275 }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="d-block width-full"
            loading="lazy"
            src={openGraphImageUrl}
            alt={name}
          />
        </a>
      )}
      <div className="px-3">
        <div className="d-flex flex-justify-between my-3">
          <div className="d-flex flex-auto">
            <span
              dangerouslySetInnerHTML={{
                // @ts-ignore: Property 'toSVG' does not exist on type '{ name: string; keywords: string[]; heights: { "16": { width: number; path: string; }; "24": { width: number; path: string; }; }; }'
                __html: repo.toSVG({ class: "text-gray-dark mr-2" }),
              }}
              style={{ marginTop: 2 }}
            />
            <h1 className="f3 text-gray text-normal lh-condensed">
              <a
                className="text-bold"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="tabnav px-3 mb-0">
        <nav className="tabnav-tabs" aria-label="Repository menu">
          {menu.map(({ name, path }) => (
            <a
              aria-current="true"
              href={path}
              className="tabnav-tab f6 px-2 py-1"
              key={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                dangerouslySetInnerHTML={{
                  // @ts-ignore: Property 'toSVG' does not exist on type '{ name: string; keywords: string[]; heights: { "16": { width: number; path: string; }; "24": { width: number; path: string; }; }; }'
                  __html: code.toSVG({ class: "text-gray-dark" }),
                }}
              />{" "}
              {name}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-bottom bg-white">
        <div className="px-3 pt-3">
          <p className="text-gray mb-0" />
          <div>{description}</div>
          <p />
        </div>
        <RepositoryTopicConnection nodes={repositoryTopics.nodes} />
        <LanguageConnection nodes={languages.nodes} />
      </div>
    </article>
  )
}

export default Repository

export const query = graphql`
  fragment RepositoryFragment on GitHub_Repository {
    description
    languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
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
