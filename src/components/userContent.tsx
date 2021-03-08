import React from "react"

export type UserContentProps = {
  bio: string
}

const UserContent = (props: UserContentProps) => {
  return (
    <div className="p-note user-profile-bio mb-3 js-user-profile-bio f4">
      <div>{props.bio}</div>
    </div>
  )
}

export default UserContent
