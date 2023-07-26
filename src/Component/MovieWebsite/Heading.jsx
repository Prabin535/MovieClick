import React from 'react'
import { Link } from "react-router-dom";
function Heading() {
  return (
    <div>
      <Link to="/" className="menuContent">
      <h1 id='heading'>Movie Click</h1>
      </Link>
    </div>
    
  )
}

export default Heading