import React, { Component } from 'react';
import './App.css';
import PropTypes from "prop-types";

class App extends Component {
  render() {
    const Dan = <SayHello name="Dan" pref="Tokyo" valuenum={100} valuebool={true} valuearray={[1, 2, 3]} />
    const personal = {
      sex: "male",
      age: 21
    }
    return (
      <React.Fragment>
        <div className="Test">
          {Dan}
          <SayHello name="Bob" personal={personal} />
          <SayHello name="Tanaka">Takagi</SayHello>
          <SayBye name="Alice" ></SayBye>
        </div>
        <div>
          xxx
        </div>
      </React.Fragment>
    );
  }
}

class SayBye extends React.Component {
  render() {
    return <p>Bye, {this.props.name}</p>
  }
}

SayBye.propTypes = {
  name: PropTypes.string
};

const SayHello = (props) => {
  return (
    <p
      {...props}
      xxx={props.valuebool ? "true" : ""}
      {...props.personal}
    >
    Hello, {props.name}{props.children ? ", and, " + props.children : ""}
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
}

export default App;
