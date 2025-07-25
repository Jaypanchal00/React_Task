import React, { useRef } from 'react';

function Todo1() {
  const inputRef = useRef();
  const ulRef = useRef(); 

  const handleAddTask = () => {
    const task = inputRef.current.value.trim();
    if (task === '') {
        alert("Please Fill ")
        return;
  }
    const li = document.createElement('li'); 
      li.textContent = task;
      ulRef.current.appendChild(li); 
      inputRef.current.value = ''; 
    }
  return (
    <div>
      <h1>Todo</h1>

      <input
        type="text"
        placeholder="Enter a task"
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAddTask();
        }}
      />

      <button type="button" onClick={handleAddTask}>
        Add Task
      </button>

      <ul ref={ulRef} style={{ marginTop: '20px' }}></ul>
    </div>
  );
}

export default Todo1;
