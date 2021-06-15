import React from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import AttachmentIcon from '@material-ui/icons/Attachment'
import MicNoneIcon from '@material-ui/icons/MicNone'
import './ChatForm.scss'
function ChatForm() {
  return (
    <div className='chat-form'>
      <div className='action-btn'>
        <div className='icon-block'>
          <InsertEmoticonIcon className='icon' />
        </div>
        <div className='icon-block'>
          <AttachmentIcon className='icon' />
        </div>
      </div>
      <input type='text' placeholder='message' className='chat-input' />
      <div className='icon-block'>
        <MicNoneIcon className='icon' />
      </div>
    </div>
  )
}

export default ChatForm
