import React from "react"

export type RepositoryMediaProps = {
  name: string
  openGraphImageUrl: string
  url: string
}

const RepositoryMedia = (props: RepositoryMediaProps) => (
  <a
    className="overflow-hidden flex-items-center rounded-top-1 border-black-fade border-bottom d-flex position-relative"
    style={{ maxHeight: 275 }}
    href={props.url}
  >
    <img
      className="d-block width-full"
      loading="lazy"
      src={props.openGraphImageUrl}
      alt={props.name}
    />
  </a>
)

export default RepositoryMedia
