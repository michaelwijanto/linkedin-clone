import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

async function UserInformation() {
    const user = await currentUser()
  return (
    <div>UserInformation</div>
  )
}

export default UserInformation