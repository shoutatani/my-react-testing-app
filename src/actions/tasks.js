export const inputTaskAction = (input) => ({
  type: "INPUT_TASK",
  payload: {
    input
  }
});

export const addTaskAction = (task) => ({
  type: "ADD_TASK",
  payload: {
    task
  }
});
