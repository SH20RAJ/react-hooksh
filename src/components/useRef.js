import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null); // 🔍 Peeking at the input element!

  const onButtonClick = () => {
    inputEl.current.focus(); // 🔍 Focusing the input!
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}