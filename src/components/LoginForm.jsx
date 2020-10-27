import React from 'react'
import { useHistory } from 'react-router-dom'

import Input from './Input'
import Button from './Button'

const LoginForm = () => {
  const history = useHistory()
  const handleSubmit = () => {
    history.push('/dashboard')
  }

  return (
    <form onSubmit={() => handleSubmit()}>
      <Input
        name="Usuario"
      />
      <Input
        name="Contraseña"
      />
      <Button
        name="acceder"
      />
    </form>
  )
}

export default LoginForm