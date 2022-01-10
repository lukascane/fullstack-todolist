import React,{useContext} from 'react';
import TodoContext from '../context/TodoContext';
import {Link} from 'react-router-dom';

export default function ToDo({item}) {
  const {deleteTodo, sendMessage} = useContext(TodoContext);
  return (
    <div className="todo">
      <h3> {item.todo} </h3>
      <h4> {item.date} 
        <Link to={`/category/${item.category}`} 
          className="todoCategory"
        > {item.category} </Link> 
      </h4>
      <p> {item.desc.substr(0,5)}... </p>
      <button onClick={()=>deleteTodo(item.id)} >Delete</button> 
      <button onClick={()=>sendMessage(item.id)} className="sendbutton" value="Send Message">Send</button>
      
    </div>
   
  )
}



