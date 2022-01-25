import React from 'react';

import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <AddTodoForm/>
  );

  const TodoList = () => {
    return (
      <form>
      <h1>TODO LIST</h1>
    <label> Title</label>
    <input id = "todoTitle"> </input>
        {/* <ul>
        {state.map(function(item){
          return <li key={item.id}> {item.title} </li>; 
        })}
        </ul> */}
    </form> 
    )
  }



}



export default AddTodoForm;