import { code } from "@primer/octicons"
import React from "react"

export type RepositoryNavigationProps = {
  url: string
}

const RepositoryNavigation = (props: RepositoryNavigationProps) => {
  return (
    <div className="tabnav px-3 mb-0">
      <nav className="tabnav-tabs" aria-label="Repository menu">
        <a
          aria-current="true"
          href={props.url}
          className="tabnav-tab f6 px-2 py-1"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: code.toSVG({ class: "text-gray-dark" }),
            }}
          ></span>{" "}
          Code
        </a>
      </nav>
    </div>
  )
}

export default RepositoryNavigation
