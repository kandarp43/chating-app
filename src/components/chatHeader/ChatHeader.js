import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import './ChatHeader.scss'
function ChatHeader() {
  return (
    <div className='chat-header'>
      <div className='img-container'>
        <img
          src='https://avatars.githubusercontent.com/u/51157743?s=64&v=4'
          alt='imgChatHead'
        />
      </div>
      <div className='card-detail'>
        <h4 className='title'>user 1</h4>
        <p className='description'>online</p>
      </div>
      <div className='action-items'>
        <MoreVertIcon />
      </div>
    </div>
  )
}

export default ChatHeader
