import { Link } from "gatsby"
import React from "react"

const NotFoundPage = () => (
  <main className="font-mktg">
    <title>Page not found</title>
    <div
      className="position-relative"
      style={{ zIndex: 0, transition: "all 0.25s easi-in" }}
    >
      <div
        className="position-relative d-flex my-0 mx-auto overflow-hidden"
        style={{
          width: 940,
          height: "100vh",
          clear: "both",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: 125 }}>404</h1>
        <p style={{ width: 215, fontSize: 30, fontWeight: "bold" }}>
          This is not the web page you are looking for.
        </p>
        <Link style={{ marginTop: 20, fontSize: 20 }} to="/">
          Go home
        </Link>
      </div>
    </div>
  </main>
)

export default NotFoundPage
