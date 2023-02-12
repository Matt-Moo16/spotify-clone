import React, { useEffect, useState } from 'react'
import Login from './Login/Login'
import { getCodeFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { Buffer } from 'buffer'

const spotify = new SpotifyWebApi()
//dotenv.config()

const App = () => {
  const [code, setCode] = useState(null);

  useEffect(() => {
    if (!code) {
      const urlObject = getCodeFromUrl()
      const _code = urlObject.code
      console.log(process.env.REACT_APP_CLIENT_ID)

      if (_code) {
        setCode(_code)
        window.history.pushState({code}, 'title', window.location.origin)

        let bufferObj = Buffer.from(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`, 'utf8')
        let encodedClient = bufferObj.toString('base64')
        const urlParams = new URLSearchParams({
          grant_type: 'authorization_code',
          code: _code,
          redirect_uri: 'http://localhost:3000/',
        })

        const requestOptions = {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${encodedClient}` 
          },
          body: urlParams,
        }

        fetch('https://accounts.spotify.com/api/token', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data))
      }
      console.log('I HAVE A code', code)
    }
  }, [])

  return (
    <div>
      {
        code ? (
          <h1>I am logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  )
}

export default App

