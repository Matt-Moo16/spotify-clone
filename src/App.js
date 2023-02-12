import React, { useEffect, useState } from 'react'
import Login from './Login/Login'
import { getTokenFromUrl } from './spotify'

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!token) {
      const urlObject = getTokenFromUrl()
      const _token = urlObject.code

      if (_token) {
        setToken(_token)
        window.history.pushState({token}, 'title', window.location.origin)
      }
      console.log('I HAVE A TOKEN', token)
    }
  }, [])

  return (
    <div>
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  )
}

export default App

