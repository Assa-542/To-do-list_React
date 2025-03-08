import React from 'react';

function TodoItem({ task, index, removeTask }) {
  return (
    <li>
      {task} <button onClick={() => removeTask(index)}>Удалить</button>
    </li>
  );
}

export default TodoItem;
