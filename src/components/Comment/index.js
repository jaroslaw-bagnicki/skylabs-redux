import React from 'react';
import { connect } from 'react-redux';

import { voteUpComment, voteDownComment, removeComment } from '../../store/actions/commentActions';

const Comment = ({ id, text, votes, voteUpComment, voteDownComment, removeComment  }) => (
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => voteUpComment(id)}>Vote up</button>
    <button onClick={() => voteDownComment(id)}>Vote down</button>
    <button onClick={() => removeComment(id)}>Delete</button>
  </li>
);

const mapDispatchToProps = {
  voteUpComment, 
  voteDownComment, 
  removeComment
}

export default connect(null, mapDispatchToProps)(Comment);


