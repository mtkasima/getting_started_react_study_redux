import React from 'react';

export default function TodoApp({ task, tasks, addTask, inputTask }) {
  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)}/>
      <button type="button" onClick={() => addTask(task)}>add</button>
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
