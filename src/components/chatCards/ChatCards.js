import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import './ChatCards.scss'

function ChatCards() {
  return (
    <div className='chat-cards'>
      <div className='card'>
        <div className='img-container'>
          <img
            src='https://avatars.githubusercontent.com/u/51157743?s=64&v=4'
            alt='chatimg'
          />
        </div>
        <div className='card-detail'>
          <h4 className='title'>user 1</h4>
          <p className='description'>hello developers</p>
        </div>
        <div className='time'>10:09 pm</div>
        <div className='action-btn'>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  )
}

export default ChatCards
