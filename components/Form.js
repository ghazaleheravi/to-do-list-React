import React, { useState } from 'react';

export default function Form(props) {
  console.log(props)
  const [submit, setSubmit] = useState(''); 

  setSubmit() {
    if (submit !== '') {
      <Todo name={submit}/>
    }
  }

  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor={props.id} className="label__lg">
          What needs to be done?
        </label>
      </h2>  
      <input 
        id={props.id} 
        type="text" 
        className="input input__lg" 
        autoComplete="off"
      />
      <button 
        type="submit" 
        className="btn btn__primary btn__lg" 
        onSubmit={() => setSubmit()}
      >
        Add
      </button>  
    </form>
  );
}