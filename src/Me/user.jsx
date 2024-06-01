import React,{useContext} from 'react'
import { Appcontext } from './Contextuse'

function User() {
    const {username}=useContext(Appcontext)
  return (
    <div>
        <p>user:{username}</p>
    </div>
  )
}

export default User