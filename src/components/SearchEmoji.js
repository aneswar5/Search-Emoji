import React from 'react';
import './SearchEmoji.css'

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
