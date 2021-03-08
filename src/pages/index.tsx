import { graphql } from "gatsby"
import React from "react"
import PinnableItemConnection, {
  PinnableItemConnectionProps,
} from "../components/pinnableItemConnection"
import User, { UserProps } from "../components/user"

type IndexPageProps = {
  data: {
    github: {
      viewer: UserProps
      pinnedItems: PinnableItemConnectionProps
    }
  }
}

const IndexPage = (props: IndexPageProps) => {
  return (
    <main>
      <div
        className="border-bottom border-gray-light"
        style={{ backgroundColor: "#fcfdfd" }}
      >
        <div className="container-xl p-responsive">
          <div className="d-md-flex flex-wrap flex-lg-nowrap gutter-md">
            <User
              avatarUrl={props.data.github.viewer.avatarUrl}
              bio={props.data.github.viewer.bio}
              login={props.data.github.viewer.login}
              name={props.data.github.viewer.name}
              pinnedItems={props.data.github.viewer.pinnedItems}
              url={props.data.github.viewer.url}
            />
            <PinnableItemConnection
              nodes={props.data.github.viewer.pinnedItems.nodes}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    github {
      viewer {
        ...UserFragment
        pinnedItems(first: 6) {
          ...PinnableItemConnectionFragment
        }
      }
    }
  }
`
