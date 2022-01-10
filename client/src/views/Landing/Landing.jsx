import React, { useState,useContext } from 'react'
import TodoContext from '../../context/TodoContext';
import Form from './Form';
import TodoList from './TodoList';

export default function Landing() {

  const [todo,setTodo] = useState("");
  const [date,setDate] = useState("");
  const [category,setCategory] = useState("Daily");
  const [desc,setDesc] = useState("");

  const {onSubmitTodo} = useContext(TodoContext);

  return (
    <div className="landingContainer" >
      <div className="formCol">
        <Form todo={todo} onChangeTodo={(e)=>setTodo(e.target.value)}
              date={date} onChangeDate={(e)=>setDate(e.target.value)}
              category={category} onChangeCategory={(e)=>setCategory(e.target.value)}
              desc={desc} onChangeDesc={(e)=>setDesc(e.target.value)}
              onSubmit={(e)=>onSubmitTodo(e,todo,date,category,desc)}
        />
      </div>
      <div className="todoCol">
        <TodoList />
      </div>
    </div>
  )
}
