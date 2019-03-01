import React from 'react';
import { connect } from 'react-redux';

import { addComment } from '../../store/actions/commentActions';

import Comment from '../Comment';

const CommentList = ({ comments, handleAddComment }) => (
  <>
    <button onClick={handleAddComment}>Add comment</button>
    <ul>
      { comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </ul>
  </>
);

const mapStateToProps = (state) => ({
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  handleAddComment: () => {
    const text = prompt('Enter Your comment');
    if (text !== null) dispatch(addComment(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);