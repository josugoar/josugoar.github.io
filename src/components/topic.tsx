import { Chip, createStyles, makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(0.5),
    },
  })
)

export type TopicProps = {
  name: string
}

const Topic = (props: TopicProps) => {
  const classes = useStyles()

  return <Chip className={classes.root} label={props.name} />
}

export default Topic
