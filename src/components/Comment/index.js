import React from 'react';
import { connect } from 'react-redux';

import { voteUpComment } from '../../store/actions/commentActions';

const Comment = ({ id, text, votes, voteUpComment }) => (
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => voteUpComment(id)}>Vote up</button>
  </li>
)

export default connect(null, {voteUpComment})(Comment);


