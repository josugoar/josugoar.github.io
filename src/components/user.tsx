import { graphql } from "gatsby"
import React from "react"
import UserContent from "./userContent"
import UserHeader from "./userHeader"

export type UserProps = {
  avatarUrl: string
  bio: string | null
  login: string
  name: string | null
  url: string
}

const User = (props: UserProps) => {
  return (
    <div
      className="flex-shrink-0 col-12 col-md-3 mb-4 mb-md-0 pt-4 position-md-sticky"
      style={{ height: "100%", top: 0 }}
    >
      <div className="h-card" itemScope itemType="http://schema.org/Person">
        <UserHeader
          avatarUrl={props.avatarUrl}
          login={props.login}
          name={props.name}
          url={props.url}
        />
        <UserContent bio={props.bio} />
      </div>
    </div>
  )
}

export default User

export const query = graphql`
  fragment UserFragment on GitHub_User {
    avatarUrl
    bio
    login
    name
    url
  }
`
