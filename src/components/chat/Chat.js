import React from 'react'
import './Chat.scss'
function Chat() {
  return (
    <div className='chat-container'>
      <div className='chat you'>
        <span className='name'>kandarp</span>
        <p className='msg'>this is message</p>
        <span className='time'>10:10</span>
      </div>
      <div className='chat you'>
        <span className='name'>kandarp</span>
        <p className='msg'>this is message</p>
        <span className='time'>10:10</span>
      </div>
    </div>
  )
}

export default Chat
