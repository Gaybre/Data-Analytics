import React from 'react'
import { Link } from 'react-router-dom'

import ProfileDemo from '../assets/profile.jpg'

const Profile = () => {
  return (
    <>
      <div className="profile">
        <img
          src={ProfileDemo}
          alt='profile-img'
        />
        <span>🔻</span>
        <nav className="profile__menu">
          <Link to='/login'>
            Mi perfil
          </Link>
          <Link to='/login'>
            Cerrar sesión
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Profile
