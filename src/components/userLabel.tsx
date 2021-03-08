import React from "react"

export type UserLabelProps = {
  login: string
  name: string
}

const UserLabel = (props: UserLabelProps) => {
  return (
    <div
      className="vcard-names-container float-left col-10 col-md-12 pt-1 pt-md-3 pb-1 pb-md-3"
      style={{ position: "sticky" }}
    >
      <h1 className="vcard-names pl-2 pl-md-0">
        <span
          className="vcard-fullname d-block overflow-hidden"
          itemProp="name"
        >
          {props.name}
        </span>
        <span className="vcard-username d-block" itemProp="additionalName">
          {props.login}
        </span>
      </h1>
    </div>
  )
}

export default UserLabel
