import React from 'react'
import { NavLink } from 'react-router-dom'

import Nav from './Nav'
import Profile from './Profile'

import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/home">
        <img src={Logo} alt="data-nalytics-logo" />
      </NavLink>
      <div>
        <Nav />
        <Profile />
      </div>
    </div>
  )
}

export default Navbar