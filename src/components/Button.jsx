import React from 'react'

const Button = ({name, typeStyle, onClick}) => {
  return (
    <button
      className={typeStyle ? `btn--${typeStyle}` : 'btn--normal'}
      onClick={onClick}
    >
      {name || 'aceptar'}
    </button>
  )
}

export default Button