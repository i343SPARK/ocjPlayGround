import React from 'react'
import {Link} from "react-router-dom" 

export const Bar = () => {
  return (
    <div className='BarContainer'>
        <Link className='elemetBar' to="/" >Main</Link>
        <Link className='elemetBar' to="/shareScreen" >Share</Link>
    </div>
  )
}
