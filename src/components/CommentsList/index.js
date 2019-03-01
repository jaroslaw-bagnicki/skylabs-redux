import React from 'react';
import { connect } from 'react-redux';

import Comment from '../Comment';

const CommentList = ({ comments }) => (
  <ul>
    { comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList);