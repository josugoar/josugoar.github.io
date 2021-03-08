import { repo } from "@primer/octicons"
import React from "react"

export type RepositoryHeaderProps = {
  name: string
  url: string
}

const RepositoryHeader = (props: RepositoryHeaderProps) => {
  return (
    <div className="d-flex my-3 px-3">
      <span
        dangerouslySetInnerHTML={{
          __html: repo.toSVG({ class: "text-gray-dark mr-2" }),
        }}
        style={{ marginTop: 2 }}
      />
      <h1 className="f3 text-gray text-normal lh-condensed">
        <a className="text-bold" href={props.url}>
          {props.name}
        </a>
      </h1>
    </div>
  )
}

export default RepositoryHeader
