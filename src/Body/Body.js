import React from 'react'
import './Body.css'
import Header from '../Header/Header'

const Body = ({spotify}) => {
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='bodyInfo'>
        <img src='' alt=''/>
        <div className='bodyInfoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description...</p>
        </div>
      </div>
    </div>
  )
}

export default Body
