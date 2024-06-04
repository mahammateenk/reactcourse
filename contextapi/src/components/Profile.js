import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import EmailContext from '../context/emailcontext'

function Profile() {
    const {user} = useContext(UserContext)
    const {em} = useContext(EmailContext)
    if(!user && !em) return <h1>Not Logged in</h1>
  

  return (
    <div><h1>Profile: {user.username}</h1>
    <h2>email : {em.email}</h2>
    </div>

  )
}

export default Profile