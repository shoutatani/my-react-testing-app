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
        <TodoInput input={this.props.input} addTask={this.props.addTask} inputTask={this.props.inputTask} />
        <TodoList tasks={this.props.tasks} />
      </div>
    );
  }
}

class TodoInput extends React.Component {

  constructor(props) {
    super(props);
  }

  addTask(task) {
    this.props.addTask(task);
    this.props.inputTask("");
  }

  render() {
    return (
      <div>
        <input
          placeholder="新規TODOを入力してください"
          onChange={e => this.props.inputTask(e.target.value)}
          value={this.props.input}
        />
        <button onClick={() => this.addTask(this.props.input)}>登録</button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props);
    const list = this.props.tasks.map((task, i) => {
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