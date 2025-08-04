import React, { useState } from 'react';

function TodoWithUseState() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    const newTask = input.trim();
    if (newTask !== '') {
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2> To-Do Usestate</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>

      <ul >
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button  onClick={() => handleDeleteTask(index)}>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoWithUseState;
