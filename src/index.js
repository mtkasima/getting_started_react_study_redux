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

function handleChange() {
  console.log(store.getState());
}

const store = createStore(tasksReducer);

const unsubscribe = store.subscribe(handleChange);

store.dispatch(addTask('Storeを学ぶ'));
