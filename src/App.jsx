import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import { BrowserRouter } from 'react-router-dom'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
const App = () => {
  const {audioRef,track} = useContext(PlayerContext)
  return (
    <BrowserRouter>
    <div className='h-screen bg-black'>
       <div className='h-[90%] flex'>
           <Sidebar/>
           <Display/>
       </div>
       <Player/>
       <audio preload='auto' ref={audioRef} src={track.file}></audio>
    </div>
    </BrowserRouter>
  )
}

export default App
