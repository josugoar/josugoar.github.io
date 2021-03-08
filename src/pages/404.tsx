import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  },
  code: {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
  },
  heading: {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  },
  paragraph: {
    marginBottom: 48,
  },
})

const NotFoundPage = (): JSX.Element => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <title>Not found</title>
      <h1 className={classes.heading}>Page not found</h1>
      <p className={classes.paragraph}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" && (
          <div>
            <br />
            Try creating a page in{" "}
            <code className={classes.code}>src/pages/</code>.
            <br />
          </div>
        )}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
