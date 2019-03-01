import React from 'react';

export default ({text, vote}) => (
  <li>
    {text} <span>votes: {vote}</span>
  </li>
)