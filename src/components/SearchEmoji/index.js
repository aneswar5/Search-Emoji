import React from 'react';
import './style.css'

function SearchEmoji(props) {
  const onChange = (e) => {
    props.onChange(e.target.value)
  }
  return (
    <input
      className="search"
      type="text"
      placeholder="Search for a Emoji..."
      onChange={onChange}
    />
  )
}

export default SearchEmoji;
