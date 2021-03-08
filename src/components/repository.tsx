import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React from "react"
import RepositoryTopicConnection, {
  RepositoryTopicConnectionProps,
} from "./repositoryTopicConnection"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

type RepositoryProps = {
  description: string | null
  id: string
  name: string
  openGraphImageUrl: string
  repositoryTopics: RepositoryTopicConnectionProps
  url: string
  usesCustomOpenGraphImage: boolean
}

const Repository = (props: RepositoryProps) => {
  const classes = useStyles()

  return (
    <Link
      className={classes.root}
      href={props.url}
      rel="noopener noreferrer"
      target="_blank"
      underline="none"
    >
      <Card>
        <CardActionArea>
          {props.usesCustomOpenGraphImage && (
            <CardMedia
              alt={props.name}
              className={classes.media}
              component="img"
              height="140"
              image={props.openGraphImageUrl}
              title={props.name}
            />
          )}
          <CardContent>
            <Typography component="h2" gutterBottom variant="h5">
              {props.name}
            </Typography>
            <Typography color="textSecondary" component="p" variant="body2">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <RepositoryTopicConnection nodes={props.repositoryTopics.nodes} />
          </CardActions>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default Repository

// https://material-ui.com/components/pagination/
// https://material-ui.com/components/skeleton/
// https://material-ui.com/customization/theming/
// https://material-ui.com/components/transitions/

// export const query = graphql`
//   fragment RepositoryFragment {
//     repository(name: $name, owner: $owner) {
//       description
//       id
//       name
//       openGraphImageUrl
//       repositoryTopics(first: 10) {
//         nodes {
//           id
//           topic {
//             name
//           }
//         }
//       }
//       url
//       usesCustomOpenGraphImage
//     }
//   }
// `
