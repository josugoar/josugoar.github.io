import { graphql } from "gatsby"
import React from "react"

export interface UserProps {
  avatarUrl: string
  bio: string | null
  login: string
  name: string | null
  url: string
}

const User = ({ avatarUrl, bio, login, name, url }: UserProps) => (
  <div
    className="flex-shrink-0 col-12 col-md-3 pt-4 position-md-sticky"
    style={{ height: "100%", top: 0 }}
  >
    <div itemScope itemType="http://schema.org/Person">
      <div className="clearfix d-flex d-md-block flex-items-center mb-4 mb-md-0">
        <div
          className="position-relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0"
          style={{ zIndex: 4 }}
        >
          <a
            className="d-block"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="avatar avatar-user width-full border bg-white"
              style={{ height: "auto" }}
              alt={login}
              src={avatarUrl}
              width="260"
              height="260"
            />
          </a>
        </div>
        <div
          className="vcard-names-container float-left col-10 col-md-12 pt-1 pt-md-3 pb-1 pb-md-3"
          style={{ position: "sticky" }}
        >
          <h1 className="vcard-names pl-2 pl-md-0">
            <span
              className="vcard-fullname d-block overflow-hidden"
              itemProp="name"
            >
              {name}
            </span>
            <span className="vcard-username d-block" itemProp="additionalName">
              {login}
            </span>
          </h1>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column d-md-block">
          {bio && (
            <div className="user-profile-bio f4">
              <div>{bio}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)

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
