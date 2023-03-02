
import React from 'react'
import {Link} from "react-router-dom"
import {auth} from "../config/firebase.ts"
import {useAuthState} from 'react-firebase-hooks/auth'
function Navbar() {
const [user] =useAuthState(auth);
  return (
    <div>
     <Link to='/'>Home</Link><br/>
     <Link to='/login'>Login page</Link>
     <div>
  
      <p>{user?.dislayName}</p>
     <img alt="ap" src={ user.photoURL }/>
     </div>
    </div>
  )
}

export default Navbar
