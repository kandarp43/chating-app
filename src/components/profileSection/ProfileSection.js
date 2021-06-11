import React from 'react'

function ProfileSection() {
  return (
    <div className='profile-section'>
      <div className='img-container'>
        <img
          src='https://avatars.githubusercontent.com/u/51157743?s=64&v=4'
          alt='placeforimage'
        />
      </div>
      <div className='action-items'>Logout</div>
    </div>
  )
}

export default ProfileSection
