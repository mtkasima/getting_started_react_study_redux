import { createStore } from 'redux';

const initialState = {
  tasks: []
};

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

const store = createStore(tasksReducer);

store.dispatch(addTask('Storeを学ぶ'));
console.log(store.getState());
