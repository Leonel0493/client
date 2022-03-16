import React from 'react'
import useAuth from '../Auth/useAuth'

const userCredentials = {

};

export default function LoginPage() {
  const { login } = useAuth()
  return (
    <div>
        <h1>LoginPage</h1>
        <button onClick={() => login(userCredentials)}>Iniciar Sesion</button>
    </div>
  )
}
