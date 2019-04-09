import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      unique_id: 0,
      input: "",
    }
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({
      input: value
    });
  }

  addTodo() {
    const tasks = this.state.tasks;
    const unique_id = this.state.unique_id;

    tasks.push({
      title: this.state.input,
      id: unique_id
    });

    this.setState({
      tasks: tasks,
      unique_id: unique_id + 1,
    });
  }

  render() {
    // const Dan = <SayHello name="Dan" pref="Tokyo" valuenum={100} valuebool={true} valuearray={[1, 2, 3]} />
    // const personal = {
    //   sex: "male",
    //   age: 21
    // }
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput onClick={() => this.addTodo()} onChange={(e) => this.onChange(e)} />
        <TodoList tasks={this.state.tasks} />
      </div>
      // <React.Fragment>
      //   <div className="Test">
      //     {Dan}
      //     <SayHello name="Bob" personal={personal} />
      //     <SayHello name="Tanaka">Takagi</SayHello>
      //     <SayBye name="Alice" ></SayBye>
      //   </div>
      //   <div>
      //     xxx
      //   </div>
      // </React.Fragment>
    );
  }
}

class TodoInput extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="新規TODOを入力してください" onChange={this.props.onChange} />
        <button onClick={this.props.onClick}>登録</button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    const list = this.props.tasks.map(task => {
      return <TodoItem {...task} key={task.id} />
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
    return <li>{this.props.title}</li>;
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
