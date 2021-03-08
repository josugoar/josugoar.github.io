import { graphql } from "gatsby"
import React from "react"
import PinnableItemConnection from "../components/pinnableItemConnection"
import User, { UserProps } from "../components/user"

type IndexPageProps = {
  data: {
    github: {
      viewer: UserProps
    }
  }
}

class IndexPage extends React.Component<IndexPageProps> {
  componentDidMount() {
    if (this.props.data.github.viewer.name) {
      document.title = `${this.props.data.github.viewer.login} (${this.props.data.github.viewer.name})`
    } else {
      document.title = this.props.data.github.viewer.login
    }
  }

  render() {
    return (
      <main>
        <div
          className="border-bottom border-gray-light"
          style={{ backgroundColor: "#fcfdfd" }}
        >
          <div className="container-xl p-responsive">
            <div className="d-md-flex flex-wrap flex-lg-nowrap gutter-md">
              <User
                avatarUrl={this.props.data.github.viewer.avatarUrl}
                bio={this.props.data.github.viewer.bio}
                login={this.props.data.github.viewer.login}
                name={this.props.data.github.viewer.name}
                url={this.props.data.github.viewer.url}
              />
              <PinnableItemConnection
                nodes={this.props.data.github.viewer.pinnedItems.nodes}
              />
            </div>
          </div>
        </div>
      </main>
    )
  }
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
