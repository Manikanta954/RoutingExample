import React from 'react'
import { Link } from 'react-router-dom'
import './component.css'

function Navbar() {
  return (
    <>
      <nav >
        <li >
          <h4 style={{textDecoration:'none',color:'white'}}><Link to={'/'}>Home</Link></h4>
          <h4> <Link to={'/About'}>About</Link></h4>
          <h4>  <Link to={'/Contact'}>Contact</Link></h4>
        </li>
      </nav>
    </>
  )
}

export default Navbar