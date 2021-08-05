import React, { useState } from 'react';

function Form(props) {
  //console.log(props)
  const [name, setName] = useState(''); 
   
  function handleChange(e) {
    //showing event Listener is attached to the input
    console.log('typing!');   
    setName(e.target.value);
    
    console.log('input-value:', e.target.value);
    console.log('name:',name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName('');
  } 
  
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>  
      <input 
        id="new-todo-input" 
        type="text" 
        className="input input__lg" 
        autoComplete="off"
        value={name}       //using state hooks to give input changeable value!
        onChange={handleChange}
      />
      <button 
        type="submit" 
        className="btn btn__primary btn__lg" 
      >
        Add
      </button>  
    </form>
  );
}

export default Form;