import { createStore, replaceReducer } from 'redux';

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

const resetTask = () => ({
  type: 'RESET_TASK',
})

function resetReducer(state = initialState, action) {
  switch (action.type) {
    case 'RESET_TASK':
      return {
        ...state,
        tasks: []
      };
  default:
    return state;
  }
}

const store = createStore(tasksReducer);

store.dispatch(addTask('Storeを学ぶ'));
console.log(store.getState());

store.replaceReducer(resetReducer);

store.dispatch(resetTask());
console.log(store.getState());
