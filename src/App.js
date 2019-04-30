import { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

class SayBye extends Component {
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
