import React from 'react'


export default function Form(prop) {

  
  return (
      <form  className="form-container form-control-lg" onSubmit={prop.onSubmit}>

      <label htmlFor="todo">To Do:</label>
      <input type="text" name="todo" id="todo" placeholder="e.g. Cook lunch" 
          value={prop.todo} onChange={prop.onChangeTodo}
      />

      <label htmlFor="date"> Date: </label>
      <input type="date" id="date" name="date"
          value={prop.date} onChange={prop.onChangeDate}
      />

      <label htmlFor="category">Category</label>
      <select id="category"  name="category"
          value={prop.category} onChange={prop.onChangeCategory}
      >
        <option value="Daily">Daily</option>
        <option value="Urgent">Urgent</option>
        <option value="Not Frequent">Not Frequent</option>
      </select>

      <label htmlFor="description">Description (optional)</label>
      <textarea id="description" name="description" cols="30" rows="10" 
        placeholder="Write some description for the todo"
        value={prop.desc} onChange={prop.onChangeDesc}
      >
      </textarea>

      <button type="submit">Add To Do</button>
    </form>
  )
}
