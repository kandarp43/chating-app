import React from 'react'
import ChatCards from './components/chatCards/ChatCards'
import SearchUsers from './components/searchUsers/SearchUsers'
import ProfileSection from './components/profileSection/ProfileSection'
import Chatsection from './components/chatSection/Chatsection'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <div className='left-side'>
        <ProfileSection />
        <SearchUsers />
        <ChatCards />
        <ChatCards />
        <ChatCards />
        <ChatCards />
      </div>
      <div className='right-side'>
        <Chatsection />
      </div>
    </div>
  )
}

export default App
