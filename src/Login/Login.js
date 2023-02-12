import React from 'react'
import './Login.css'
import { loginUrl } from '../spotify'

const Login = () => {
  return (
    <div className='login'>
      <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''/>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      https://accounts.spotify.com/en/authroize?client_id=0cf99cc0cb9c44678b34b5a20f066c39&redirect_uri=http://localhost:300/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=code&show_dialog=true
    </div>
  )
}

export default Login
