import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

class App extends Component {
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

  inputTaskAction(input) {
    return {
      type: "INPUT_TASK",
      payload: {
        input
      }
    }
  }

  addTaskAction(task) {
    return {
      type: "ADD_TASK",
      payload: {
        task
      }
    }
  }

  addTask(task) {
    this.props.store.dispatch(this.addTaskAction(task));
    this.props.store.dispatch(this.inputTaskAction(""));
  }

  render() {
    return (
      <div>
        <input
          placeholder="新規TODOを入力してください"
          onChange={e => this.props.store.dispatch(this.inputTaskAction(e.target.value))}
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

class SayBye extends React.Component {
  render() {
    return <p>Bye, {this.props.name}</p>;
  }
}

SayBye.propTypes = {
  name: PropTypes.string
};

const SayHello = props => {
  return (
    <p {...props} xxx={props.valuebool ? "true" : ""} {...props.personal}>
      Hello, {props.name}
      {props.children ? ", and, " + props.children : ""}
    </p>
  );
};

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  pref: PropTypes.string,
  valuenum: PropTypes.number,
  valuebool: PropTypes.bool,
  valuearray: PropTypes.arrayOf(PropTypes.number),
  // personal: PropTypes.objectOf(PropTypes.string) // オブジェクトのすべての要素がstringのとき
  personal: PropTypes.shape({
    sex: PropTypes.oneOf(["male", "female"]),
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

SayHello.defaultProps = {
  pref: "Tokyo"
};

export default App;
