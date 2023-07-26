import React from 'react'
import { Link , Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
        <div className="cards">
                <Link to="/UploadProduct" id="contents">Create Product</Link>
                
              </div>
        <Outlet/>
    </div>
  )
}
