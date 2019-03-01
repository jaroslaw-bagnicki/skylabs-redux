import React from 'react';

export default ({text, votes}) => (
  <li>
    {text} <span>votes: {votes}</span>
  </li>
)