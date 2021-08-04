import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';


function App(props) {
 // console.log(props);
  const taskList = props.tasks.map(task => 
    <Todo 
      name={task.name}
      completed={task.completed}
      id={task.id} 
      key={task.key}
    />
  ); 

  function addTask(name) {
    if (name === '') {
      alert('please fill out what you need to be done!');
    } else {
      alert(name);
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
