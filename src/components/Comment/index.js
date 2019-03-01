import React from 'react';
import { connect } from 'react-redux';

import { voteUpComment, voteDownComment, removeComment, editComment  } from '../../store/actions/commentActions';

const Comment = ({ id, text, votes, voteUpComment, voteDownComment, removeComment, editComment }) => (
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => voteUpComment(id)}>Vote up</button>
    <button onClick={() => voteDownComment(id)}>Vote down</button>
    <button onClick={() => removeComment(id)}>Delete</button>
    <button onClick={() =>  {
      const newText = prompt('Edit Your comment', text);
      if (newText !== null) editComment(id, newText)}}
      >Edit</button>
  </li>
);

const mapDispatchToProps = {
  voteUpComment, 
  voteDownComment, 
  removeComment,
  editComment 
}

export default connect(null, mapDispatchToProps)(Comment);


