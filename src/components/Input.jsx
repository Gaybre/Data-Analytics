import React from 'react'

const Input = ({name, type}) => {
  return (
    <div className="input">
      <label>
        {name || 'Usuario'}
        <input
          type={type || 'text'}
          id={name || null}
          placeholder={name}
          // name={name || 'Usuario'}
        />
      </label>
    </div>
  )
}

export default Input