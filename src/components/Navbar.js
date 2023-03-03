
import React from 'react'
import {Link} from "react-router-dom"
import {auth} from "../config/firebase.ts"
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
function Navbar() {
const [user] =useAuthState(auth);

const signUserOut =async () =>{
  await signOut(auth);

}
  return (
    <div>
     <Link to='/'>Home</Link><br/>
     <Link to='/login'>Login page</Link>
     <div>
  {user &&(   <>
    <p>{user?.email}</p>
     <img alt="apple" src={user.photoURL}/> <br></br>
     <button onClick={signUserOut}>Sign Out</button>
  </>
     
     )}
  
     </div>
    </div>
  )
}

export default Navbar
