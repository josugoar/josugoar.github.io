import { graphql } from "gatsby"
import React from "react"
import PinnableItemConnection, {
  PinnableItemConnectionProps,
} from "../components/PinnableItemConnection"
import User, { UserProps } from "../components/User"

interface ViewerProps extends UserProps {
  pinnedItems: PinnableItemConnectionProps
}

interface IndexPageProps {
  data: {
    github: {
      viewer: ViewerProps
    }
  }
}

const IndexPage = ({
  data: {
    github: {
      viewer: { pinnedItems, ...user },
    },
  },
}: IndexPageProps) => (
  <main>
    <title>{user.name ? `${user.login} (${user.name})` : user.login}</title>
    <div className="container-xl px-5 px-md-4 px-lg-5">
      <div className="gutter-condensed flex-column flex-md-row d-flex mx-md-2 mx-lg-3">
        <User {...user} />
        <PinnableItemConnection {...pinnedItems} />
      </div>
    </div>
  </main>
)

export default IndexPage

export const query = graphql`
  query {
    github {
      viewer {
        pinnedItems(first: 6, types: REPOSITORY) {
          ...PinnableItemConnectionFragment
        }
        ...UserFragment
      }
    }
  }
`
