import React from "react"
import UserAvatar from "./userAvatar"
import UserLabel from "./userLabel"

export type UserHeaderProps = {
  avatarUrl: string
  login: string
  name: string
  url: string
}

const UserHeader = (props: UserHeaderProps) => {
  return (
    <div className="clearfix d-flex d-md-block flex-items-center mb-4 mb-md-0">
      <div className="clearfix d-flex d-md-block flex-items-center mb-4 mb-md-0">
        <UserAvatar
          avatarUrl={props.avatarUrl}
          login={props.login}
          url={props.url}
        />
        <UserLabel login={props.login} name={props.name} />
      </div>
    </div>
  )
}

export default UserHeader
