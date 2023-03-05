import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useStateProviderValue } from '../StateProvider';

const Header = ({spotify}) => {

    const [{user}, dispatch] = useStateProviderValue()
  return (
    <div className='header'>
        <div className='headerLeft'>
            <SearchIcon />
            <input 
                placeholder='Search for Artists, Songs, or Playlists'
                type='text'
            />

        </div>
        <div className='headerRight'>
            <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header
