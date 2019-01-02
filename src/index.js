import React from 'react';
import { render } from 'react-dom';
import { createStore, replaceReducer } from 'redux';

const initialState = {
  task: '',
  tasks: [],
};

const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task,
  }
});

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task,
  }
});

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task]),
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

function TodoAPP({store}) {
  const { task, tasks } = store.getState();
  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))}/>
      <button type="button" onClick={() => store.dispatch(addTask(task))}>add</button>
      <ul>
        {
          tasks.map(function (item, i) {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  );
}

function renderApp(store) {
  render(
    <TodoAPP store={store}/>,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);
