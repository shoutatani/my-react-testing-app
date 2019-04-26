import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { create } from 'handlebars';

const initialState = {
  tasks: [],
  input: ""
}

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.task)
      };
    case 'INPUT_TASK':
      return {
        ...state,
        input: action.payload.input
      };
    default:
      return state;
  }
}

const store = createStore(
  tasksReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function renderApp(store) {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

store.subscribe(() => renderApp(store));
renderApp(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
