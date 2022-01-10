import React, {useContext} from 'react';
import TodoContext from '../../context/TodoContext';
import { useParams,useNavigate } from 'react-router-dom';
import ToDo from '../../components/ToDo';

export default function Category() {
  const params = useParams();
  const navigate = useNavigate();
  const {getFromCategory} = useContext(TodoContext);
  const categoryTodoList = getFromCategory(params.category)
  console.log(categoryTodoList);
  return (
    <div className="categoryContainer" >
      <button className="backButton" 
        onClick={()=>navigate("/")}
      >Back</button>
      <h1> {params.category} </h1>
      {
        categoryTodoList.length > 0 ?
          categoryTodoList.map(item=> <ToDo key={item.id} item={item} />)
        :
          <h2>Hey! there are no To Do's in this category</h2>
      }
      
    </div>
  )
}
