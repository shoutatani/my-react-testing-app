import React, { Component } from "react";
import { inputTaskAction, addTaskAction } from "../actions/tasks";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput {...this.props} />
        <TodoList {...this.props} />
      </div>
    );
  }
}

class TodoInput extends React.Component {

  constructor(props) {
    super(props);
  }

  addTask(task) {
    this.props.store.dispatch(addTaskAction(task));
    this.props.store.dispatch(inputTaskAction(""));
  }

  render() {
    return (
      <div>
        <input
          placeholder="新規TODOを入力してください"
          onChange={e => this.props.store.dispatch(inputTaskAction(e.target.value))}
          value={this.props.store.getState().input}
        />
        <button onClick={() => this.addTask(this.props.store.getState().input)}>登録</button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const list = this.props.store.getState().tasks.map((task, i) => {
      return <TodoItem task={task} key={i} />;
    });
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    return <li key={this.props.key}>{this.props.task}</li>;
  }
}