import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function App(props) {
  // console.log(props);
  const [tasks, setTasks] = useState(props.tasks);
  //console.log('tasks:' , tasks);

  function toggleTaskCompleted(id) {
    const updateTasks = tasks.map(task => {
      if (task.id === id) {
        //task.completed = !task.completed /why we have to create new object?
        return {...task, completed: !task.completed};  
      }
      return task;
    });
    setTasks(updateTasks);
  }

  function deleteTask(id) {
    const remainingTask = tasks.filter(task => id !== task.id);
    setTasks(remainingTask);
  }

  function editTask(id, newName) {
    const editingTask = tasks.map(task => {
      if(id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editingTask);
  }

  const taskList = tasks.map(task => 
    <Todo 
      name={task.name}
      completed={task.completed}
      id={task.id} 
      key={task.key}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ); 
  console.log('taskList:', taskList);

  function addTask(name) {
    // to disallow empty tasks from being added
    if (name === '') {           
      alert('please fill out what you need to be done!');
    } else {
      //using nanoid libarary to create unique ids
      const newTask = {name: name, id: 'todo-'+ nanoid(), completed: false}
      setTasks([...tasks, newTask]);
      }
  } 
  

  return (
    <div className="todoapp stack-large">
      <h1>To-Do List</h1>
      <Form addTask={addTask} />  
      
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">show</span>
          <span>all</span>
          <span className="visually-hidden">tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} remainig    
      </h2>
  
      <ul 
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
        >
        {taskList}    
      </ul>
    </div>
  );
}

export default App;
