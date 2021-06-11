import React from 'react'
import ChatCards from './components/chatCards/ChatCards'
import SearchUsers from './components/searchUsers/SearchUsers'
import ProfileSection from './components/profileSection/ProfileSection'

function App() {
  return (
    <div>
      <div className='left-side'>
        <ChatCards />
        <SearchUsers />
        <ProfileSection />
      </div>
      <div className='right-side'></div>
    </div>
  )
}

export default App
