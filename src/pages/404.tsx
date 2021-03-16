import React from "react"

const NotFoundPage = () => (
  <main>
    <title>Page not found</title>
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: 128 }}>404</h1>
      <p style={{ fontSize: 16 }}>Page not found</p>
    </div>
  </main>
)

export default NotFoundPage
