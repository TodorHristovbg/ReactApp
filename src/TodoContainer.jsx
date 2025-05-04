import {StatusButton, DropDownButton} from "./Buttons";
import { useEffect, useState } from 'react'
import TodoList from "./TodoList";
import SortDropDown from "./SortDropDown";
import FilterDropDown from "./FilterDropDown";



function TodoContainer({todos, onClick, Users}){

  const [selectedId, SetSelected] = useState(-1);

    const unfinishedTodos = todos.filter(todo => !todo.completed);
    const finishedTodos = todos.filter(todo => todo.completed);


   
    return (    
      <div className='todocontainer'>
      <BuildLeft title="Unfinished Todos" todos={unfinishedTodos} onToggle={onClick} id={selectedId} SetSelected={SetSelected} Users={Users} />
      <BuildRight title="Finished Todos" todos={finishedTodos} onToggle={onClick} id={selectedId} />
    </div>
     );
}

function BuildLeft({title, todos, onToggle, id, Users, SetSelected}) {
  const [selectedSort, SetSort] = useState('id');

  return(
  <div>
  <BuildHeader title={title} extras={
    <>
    <FilterDropDown selectedId={id} SetSelected={SetSelected} Users={Users}/>
    <SortDropDown selectedSort={selectedSort} SetSort={SetSort} HasDates={false}/> 
    </>
  }/>
  <TodoList title={title} todos={todos} onToggle={onToggle} id={id} selectedSort={selectedSort} />;
  
  </div>
  )
}
function BuildRight({title, todos, onToggle, id}) {
  const [selectedSort, SetSort] = useState('id');
  return(
    <div>
    <BuildHeader title={title} extras={
      <>
      <SortDropDown selectedSort={selectedSort} SetSort={SetSort} HasDates={true}/> 
      </>
    }/>
    <TodoList title={title} todos={todos} onToggle={onToggle} id={id} selectedSort={selectedSort} />;
    
    </div>
    )
}
function BuildHeader({title, extras, children}){
 return ( 
 <div className="header">
  <h1 className="title">{title}</h1>
  <div className="extras">
    {extras}
    {children}

  </div>

  </div>
  )

}






export default TodoContainer;