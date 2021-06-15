import React from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import AttachmentIcon from '@material-ui/icons/Attachment'
import './ChatForm.scss'
function ChatForm() {
  return (
    <div className='chat-form'>
      <div className='action-btn'>
        <InsertEmoticonIcon />
        <AttachmentIcon />
      </div>
      <input type='text' placeholder='message' className='chat-input' />
    </div>
  )
}

export default ChatForm
