import { Box, createStyles, makeStyles, Paper } from "@material-ui/core"
import React from "react"
import RepositoryTopic, { RepositoryTopicProps } from "./repositoryTopic"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0,
    },
  })
)

export type RepositoryTopicConnectionProps = {
  nodes: RepositoryTopicProps[]
}

const RepositoryTopicConnection = (props: RepositoryTopicConnectionProps) => {
  const classes = useStyles()

  return (
    <ul className={classes.root}>
      {props.nodes.map((repositoryTopic) => (
        <RepositoryTopic
          id={repositoryTopic.id}
          topic={repositoryTopic.topic}
        />
      ))}
    </ul>
  )
}

export default RepositoryTopicConnection
