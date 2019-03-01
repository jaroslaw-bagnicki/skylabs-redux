import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import store from './store';
import { addComment, voteUpComment } from './store/actions/commentActions';

window.store = store;
window.addComment = addComment;
window.voteUpComment = voteUpComment;

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root')
);


