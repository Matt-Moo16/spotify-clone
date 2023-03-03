import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';



const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerLeft'>
        <img src='' alt='' />
        <div className='footerSongInfo'>
          <h4>No song is playing</h4>
          <p>...</p>
        </div>
      </div>
      <div className='footerCenter'>
        <ShuffleIcon className='footerGreen' />
        <SkipPreviousIcon className='footerIcon' />
        <PlayCircleOutlineIcon className='footerIcon' fontSize='large' />
        <SkipNextIcon className='footerIcon' />
        <RepeatIcon className='footerGreen' />
      </div>
      <div className='footerRight'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>

      </div>
    </div>
  )
}

export default Footer
