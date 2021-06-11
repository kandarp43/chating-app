import React from 'react'
import ChatCards from './components/chatCards/ChatCards'
import SearchUsers from './components/searchUsers/SearchUsers'

function App() {
  return (
    <div>
      <div className='left-side'>
        <ChatCards />
        <SearchUsers />
      </div>
      <div className='right-side'></div>
    </div>
  )
}

export default App
