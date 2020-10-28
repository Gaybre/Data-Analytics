import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/top-line">
        Top Line
      </NavLink>
      <NavLink to="/bottom-line">
        Bottom Line
      </NavLink>
    </nav>
  )
}

export default Nav
