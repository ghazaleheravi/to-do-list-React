import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {
  console.log(props);

  const taskList = props.tasks.map((task) => 
    <Todo 
      name={task.name}
      completed={task.completed}
      id={task.id} 
      key={task.key}
    />
  ); 

  return (
    <div className="todoapp stack-large">
      <h1>To-Do List</h1>
      <Form id="new-todo-input"/>  
      
      <div className="filters btn-group stack-exception">
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
        3 tasks remainig
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
