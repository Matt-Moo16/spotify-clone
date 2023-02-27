import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import './Player.css'

const Player = ({ spotify }) => {
  return (
    <div className='player'>
      <div className='playerBody'>
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default Player
