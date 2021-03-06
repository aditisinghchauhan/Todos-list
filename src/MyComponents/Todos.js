import React from 'react';
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
  return <div className='container'>
      <h3 className='text-center my-3'>ToDos List</h3>
      {props.todos.map((tp)=>{
         return <TodoItem todo={tp} onDelete={props.onDelete}/>
      })}
      
  </div>;
};
