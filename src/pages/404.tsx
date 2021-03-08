import React from "react"

const NotFoundPage = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <title>404: Not Found...</title>
      <h1 style={{ fontSize: 128 }}>404</h1>
      <p style={{ fontSize: 16 }}>Not Found...</p>
    </div>
  )
}

export default NotFoundPage
