import React from 'react'

import Darkmode from './Darkmode'

const Header = ({title,subtitle}) => {
  return (
    <header className="header">
      <div>
        <h1>{title || 'Encabezado'}</h1>
        <h3>{subtitle || 'Subtitulo'}</h3>
      </div>
      <Darkmode />
    </header>
  )
}

export default Header
