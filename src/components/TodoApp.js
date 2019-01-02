import React from 'react';
import { addTask, inputTask } from '../actions/tasks';

export default function TodoApp({store}) {
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
