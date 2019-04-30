import { connect } from 'react-redux';
import TodoApp from "../components/TodoApp";
import { inputTaskAction, addTaskAction } from '../actions/tasks';

function mapStateToProps({ tasks, input }) {
  return {
    tasks,
    input
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTaskAction(task));
    },
    inputTask(input) {
      dispatch(inputTaskAction(input));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
