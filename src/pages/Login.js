import React from 'react'
import {auth,provider} from "../config/firebase.ts"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function Login() {
const navigate=useNavigate();
  const signInWithGoogle = async ()=>{
    
      const result = await signInWithPopup(auth,provider);
      
      navigate('/')
        console.log(result)
      
     
    

  }
  return (
    <div>
      <h2>Sign in with google to continue</h2>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  )
}

export default Login
