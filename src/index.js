import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import './index.css';
import * as serviceWorker from './serviceWorker';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';
import { Provider } from 'react-redux';

const store = createStore(
  tasksReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function renderApp(store) {
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
