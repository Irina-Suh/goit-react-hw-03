import React from 'react'
import s from './SearchBox.module.css'

const SearchBox = ({value, onFilter }) => {
  return (
    <div className='container'>
         <p>Find contacts by name</p>
      <input  className={s.search}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder='Enter your contact'
      />
    </div>
  )
}

export default SearchBox