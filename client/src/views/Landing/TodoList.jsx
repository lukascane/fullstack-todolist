import React, {useContext} from 'react';
import ToDo from '../../components/ToDo';
import TodoContext from '../../context/TodoContext';

export default function TodoList() {
  const {todoList} = useContext(TodoContext); 
  return (
    <div>
      {todoList.map(item=><ToDo key={item.id} item={item} />)}
    </div>
    
  )
}
