import React, { useState } from 'react'

import LoginForm from '../components/LoginForm'
import Logo from '../assets/logo.svg'
import Button from '../components/Button'

const Login = () => {
  const [alert, setAlert] = useState(0)
  const handleClick = () => {
    setAlert(1)
    setTimeout(() => setAlert(0), 5000)
  }

  return (
    <div className="login">
      <section className="login__left" />
      <section className="login__right">
        <figure>
          <img src={Logo} alt="data-analytics-logo" />
          <h1>
            Iniciar Sesión
          </h1>
        </figure>
        <LoginForm />
        <Button
          name="¿No tienes una cuenta?"
          typeStyle="secondary"
          onClick={() => handleClick()}
        />
        {alert
          ?
            <div className="login__right-alert">
              <p>
                El acceso esta restringido. Por favor contacta al administrador del sistema.
              </p>
            </div>
          : null
        }
      </section>
    </div>
  )
}

export default Login