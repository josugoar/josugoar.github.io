import React from "react"

export type UserAvatarProps = {
  avatarUrl: string
  login: string
  url: string
}

const UserAvatar = (props: UserAvatarProps) => {
  return (
    <div
      className="position-relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0"
      style={{ zIndex: 4 }}
    >
      <a
        className="tooltipped tooltipped-s d-block"
        aria-label={props.login}
        href={props.url}
      >
        <img
          style={{ height: "auto" }}
          alt={props.login}
          className="avatar avatar-user width-full border bg-white"
          src={props.avatarUrl}
          width="260"
          height="260"
        />
      </a>
    </div>
  )
}

export default UserAvatar
