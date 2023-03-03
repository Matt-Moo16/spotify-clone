import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateProviderValue } from '../StateProvider'

const Sidebar = () => {

    const [{ playlists }, dispatch] = useStateProviderValue()

  return (
    <div className='sidebar'>
      <img
        className='sidebarLogo' 
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />

      <br />
      <strong className='sidebarTitle'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar
