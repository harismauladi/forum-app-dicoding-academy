/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

export const useInput = () => {
  const [input, setInput] = useState('');

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return [input, onChangeHandler];
};
