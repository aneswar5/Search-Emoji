import { useEffect } from 'react';
import Item from '../emojis/index';
import Clipboard from "clipboard";
import { v4 as uuid } from 'uuid';
import './style.css'

function Result(props) {
  useEffect(() => {
    const clipboard = new Clipboard(".item");
    return () => {
        clipboard.destroy();
    };
  })

  return (
    <div className="results">
      {props.emojiFiltered.slice(0, 100).map((emoji) => (
        <Item id={uuid()} symbol={emoji.symbol} title={emoji.title} keywords={emoji.keywords} key={uuid()}/>
			))}
    </div>
  )
}

export default Result;
