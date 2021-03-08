import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
})

type UserProps = {
  avatarUrl: string
  bio: string | null
  login: string
  name: string | null
  url: string
}

const User = (props: UserProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={0}>
      <CardHeader avatar={<Avatar alt={props.login} src={props.avatarUrl} />} />
      <CardContent>
        <Typography component="h2" variant="h5">
          {props.name}
        </Typography>
        <Typography color="textSecondary" component="p" variant="body2">
          {props.bio}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default User

// export const query = graphql`
//   fragment UserFragment {
//     user(login: $login) {
//       avatarUrl
//       bio
//       login
//       name
//       url
//     }
//   }
// `
