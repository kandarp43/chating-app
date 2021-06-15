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
          <InsertEmoticonIcon className=''/>
        </div>
        <div className='icon-block'>
          <AttachmentIcon />
        </div>
      </div>
      <input type='text' placeholder='message' className='chat-input' />
      <MicNoneIcon className='icon-block' />
    </div>
  )
}

export default ChatForm
