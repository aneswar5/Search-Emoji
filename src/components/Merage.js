import React,{ useState, useEffect } from 'react';
import Header from './Header'
import Search from './SearchEmoji';
import Results from './Result';
import data from './json/data.json';
import './Merage.css';

function Merage() {
  const [emojiData, setEmojiData] = useState([]);
  const [newEmojiData, setNewEmojiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setEmojiData(data);
  }, [])
  const onChange = (val) => {
    setSearchQuery(val.toLowerCase());

    let queryKeywords = val.toLowerCase().trim().split(" ");
    let newEmojis = []
    let queryLength = queryKeywords.length;
    let queryLengthSum = 0;
    if (val.toLowerCase() !== "") {
      emojiData.forEach((item) => {
        let removeDuplicates = [...new Set(item.keywords.trim().split(" "))];
        queryLengthSum = 0;
        queryKeywords.forEach((query) => {
          removeDuplicates.forEach(keyword => {
            if (keyword.indexOf(query) >= 0) {
              queryLengthSum++;
            }
          })
        })
  
        if (queryLength <= queryLengthSum) {
          newEmojis.push(item)
        }
  
      })
    }
    setNewEmojiData(newEmojis)
  }
  return (
    <div className="container">
      <Header />
      <Search onChange={onChange} />
      <Results emojiFiltered={searchQuery === "" ? emojiData : newEmojiData} />
    </div>
  )
}

export default Merage;
