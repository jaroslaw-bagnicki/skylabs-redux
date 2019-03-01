import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  VOTE_UP_COMMENT,
  VOTE_DOWN_COMMENT
} from '../reducers/comments';

const initialState = {
  comments: [],
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        commets: [
          ...state.comments,
          {
            ...action.payload,
            vote: 0
          }
        ]
      }

    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload.id)
      }

      
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.payload.id) comment.text = action.payload.text;
          return comment;
        })
      }

    case VOTE_UP_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.payload.id) comment.vote = comment.vote + 1;
          return comment;
        })
      }

    case VOTE_DOWN_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.payload.id) comment.vote = comment.vote - 1;
          return comment;
        })
      }

    default:
      return state;
  }

}