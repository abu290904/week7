import React, { useState } from 'react';
import Happy from './Happy.png';
import Like from './Like.png';
import Sad from './Sad.png';

function DynamicEmojiLabel() {
  const [input, setInput] = useState('');
  const [emoji, setEmoji] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value === 'Happy') setEmoji(Happy);
    else if (e.target.value === 'Like') setEmoji(Like);
    else if (e.target.value === 'Sad') setEmoji(Sad);
    else setEmoji('');
  };

  return (
    <div className="App">
      <input type="text" placeholder="Enter emotion" onChange={handleChange} />
      {emoji && <img src={emoji} alt="emoji" />}
    </div>
  );
}

export default DynamicEmojiLabel;
