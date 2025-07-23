// src/components/TaskApp.js
import React, { useState } from 'react';

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (!newTask.trim()) return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  function editTask(id, newText) {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>ניהול משימות</h2>
      <input
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder=" הכנס משימה חדשה"
      />
      <button onClick={addTask}>➕ הוסף</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <input
              type="text"
              value={task.text}
              onChange={(e) => editTask(task.id, e.target.value)}
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
            />
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;
