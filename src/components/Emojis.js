import React,{ useState } from 'react';
import './emojis.css'

function Emojis(props) {
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = (e) => {
    setFadeIn(true)
    setTimeout(() => setFadeIn(false), 900)
  }

  return (
    <div
      key={props.id}
      className="item"
      onClick={handleClick}
      data-clipboard-text={props.symbol}
      data-keywords={props.keywords}
    >
      <div className={`item-copy ${fadeIn?'label-true':'label-false'}`}>
        Copied!
      </div>
      <span className="item-emoji">{props.symbol}</span>
    </div>
  )
}

export default Emojis;
