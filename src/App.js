import React, { useEffect, useState } from 'react'
import Login from './Login/Login'
import { getCodeFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { Buffer } from 'buffer'
import Player from './Player/Player'
import { useStateProviderValue } from './StateProvider'

const spotify = new SpotifyWebApi()

const App = () => {
  const [code, setCode] = useState(null);

  const [{user, token}, dispatch] = useStateProviderValue()

  useEffect(() => {
    if (!code) {
      const urlObject = getCodeFromUrl()
      const _code = urlObject.code

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
          .then(data => {
            dispatch({
              type: 'SET_TOKEN',
              token: data.access_token,
            })
            spotify.setAccessToken(data.access_token)
          })

        spotify.getMe().then((user) => {
          dispatch({
            type: 'SET_USER',
            user: user,
          })
        }) 
      }
    }
  }, [])

  return (
    <div>
      {
        code ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  )
}

export default App

