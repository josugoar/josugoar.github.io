import octicons from "@primer/octicons"
import React from "react"
import LanguageConnection, {
  type LanguageConnectionProps,
} from "./LanguageConnection"
import RepositoryTopicConnection, {
  type RepositoryTopicConnectionProps,
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
}: RepositoryProps) => (
  <article className="border rounded-1 box-shadow bg-gray-light my-4">
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
          style={{ maxHeight: 275, objectFit: "contain" }}
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
              __html: octicons.repo.toSVG({ class: "color-text-primary mr-2" }),
            }}
            style={{ marginTop: 2 }}
          />
          <h1 className="f3 color-text-secondary text-normal lh-condensed">
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
        <a
          aria-current="true"
          href={url}
          className="tabnav-tab f6 px-2 py-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: octicons.code.toSVG({ class: "color-text-primary" }),
            }}
          />{" "}
          Code
        </a>
      </nav>
    </div>
    <div className="border-bottom bg-white">
      <div className="px-3 pt-3">
        <p className="color-text-secondary mb-0" />
        <div>{description}</div>
        <p />
      </div>
      <RepositoryTopicConnection {...repositoryTopics} />
      <LanguageConnection {...languages} />
    </div>
  </article>
)

export default Repository
