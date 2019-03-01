import React from 'react';

import Comment from '../Comment';

export default ({ comments }) => (
  <ul>
    { comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);