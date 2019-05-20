import React from 'react'

const SearchBar = ({searchValue, onSearchChange}) => {
  return (
    <div className="mv2">
      <input
        className="br2 b--gray b--solid pa3 f4 outline-0"
        type="search"
        placeholder="Search.."
        value={searchValue}
        onChange={onSearchChange}
        />
    </div>
  )
}

export default SearchBar