import React from 'react'
import './SearchUsers.scss'
import SearchIcon from '@material-ui/icons/Search'

function SearchUsers() {
  return (
    <div className='search'>
      <SearchIcon className='icon-block' style={{ color: '#6d6d6d' }} />
      <input type='text' placeholder='search' />
    </div>
  )
}

export default SearchUsers
