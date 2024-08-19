/* eslint-disable no-trailing-spaces */
import { useState } from 'react';

const InputComponent = () => {
  const [inputText, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>
        You typed:
        {inputText}
      </p>
      <button type="button" onClick={() => setText('hello')}>Reset</button>
    </>
  );
};

export default InputComponent;