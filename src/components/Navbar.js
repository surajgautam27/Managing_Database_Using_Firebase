
import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
     <Link to='/'>Home</Link><br/>
     <Link to='/login'>Login page</Link>
    </div>
  )
}

export default Navbar
