import { makeStyles } from "@material-ui/core"
import React from "react"
import Repository from "../components/repository"
import User from "../components/user"

const useStyles = makeStyles({
  root: {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  },
})

const IndexPage = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <title>Home Page</title>
      <User
        avatarUrl="https://avatars.githubusercontent.com/u/56826352?u=d11278eb01ab269b53c1d874f289cefcfa2b3980&v=4"
        bio="Interested in machine learning, system administration and web development"
        login="josugoar"
        name="Josu"
        url="https://github.com/josugoar"
      />
      {/* <Repository
        description="Unopinionated argparse wrapper"
        id="0"
        name="argdeco"
        openGraphImageUrl="https://repository-images.githubusercontent.com/287952169/26085280-6a11-11eb-860d-92676f499bb6"
        repositoryTopics={{
          nodes: [
            {
              id: "0",
              topic: {
                name: "argparse",
              },
            },
            {
              id: "1",
              topic: {
                name: "wrapt",
              },
            },
            {
              id: "2",
              topic: {
                name: "python",
              },
            },
            {
              id: "3",
              topic: {
                name: "pip",
              },
            },
          ],
        }}
        url="https://github.com/josugoar/argdeco"
        usesCustomOpenGraphImage={true}
      /> */}
    </main>
  )
}

export default IndexPage

// export const query = graphql`
//   query IndexPageQuery {
//   }
// `
