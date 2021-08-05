import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  {name: 'Eat', id: 'todo-0', completed: true, key: 'todo-0'},
  {name: 'Sleep', id: 'todo-1', completed: false, key: 'todo-1'},
  {name: 'Repeat', id: 'todo-2', completed: false, key: 'todo-2'}
] 

ReactDOM.render(
  <App tasks={DATA} />,
  document.getElementById('root')
);

