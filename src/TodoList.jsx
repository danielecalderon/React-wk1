import React from 'react';


const state = [
  {
    id: "1",
    title: "one",
            
  },
  {
    id: "2",
    title: "two",
            
  },
  {
    id: "3",
    title: "three",
            
  }, 
];

const TodoList = () => {
  return (
    <div>
    <h1>TODO LIST</h1>
  
      <ul>
      {state.map(function(item){
        return <li key={item.id}> {item.title} </li>; 
      })}
      </ul>
  </div> 
  )
}



export default TodoList;