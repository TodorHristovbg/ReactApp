import {StatusButton, DropDownButton} from "./Buttons";
import { useEffect, useState } from 'react'




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
    <Filter selectedId={id} SetSelected={SetSelected} Users={Users}/>
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

function TodoList({todos, onToggle, id ,selectedSort}) {

   todos = SortTodos(selectedSort,todos);

    return (
        <div className="todowrapper">
      <div className='todolists'>
        <ul>
          {todos.map(todo => {
            
            if(id===-1 || todo.userId===id){
                return(
                    <li className='tasklist' key={todo.id}>
                      <div className="todoitem">
                      {todo.title}  
                      {todo.completedAt && (
                        <p>Complted on: {todo.completedAt}</p>


                      )}
                      </div>
                      <StatusButton completed={todo.completed} onClick={() => onToggle(todo.id)}/>
                

                    </li>
                );
            } 
        }
            
            )
          }
        </ul>
      </div>
      </div>
    );
  }

function Filter({selectedId, SetSelected, Users}){
  const [opendropdown, setOpenDropDown] = useState(false);
 

  const toggleDropdown = () => setOpenDropDown(!opendropdown);
  const handleMouseEnter = () => setOpenDropDown(true);
  const handleMouseLeave = () => setOpenDropDown(false);

  const selected = (id) =>{
    SetSelected(id);
    setOpenDropDown(false);
  }
  
  function FindUser(id, Users){
    if(id===-1) return 'All';
    const user = Users.find(u=>u.id === id);
    return user.name;
  }


  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>Filter by</p>
      <DropDownButton onClick={toggleDropdown} User={FindUser(selectedId,Users)} >
      </DropDownButton>
      
      {
        
      opendropdown && ( <ul className="dropdownmenu">
        <li> <DropDownButton className="dropdownbutton" User={FindUser(-1,Users)} onClick={() => selected(-1)} /></li>
        {Users.map(user => (
            <li key={user.id}>  
              <DropDownButton className="dropdownbutton" User={user.name} onClick={() => selected(user.id)} />
            </li>
          ))}
        </ul>
      )
      }
    </div>
  );
}
function SortDropDown({SetSort, HasDates}){
  const [opendropdown, setOpenDropDown] = useState(false);
  const [currentlabel, setCurrentLable] = useState('Id');

  const toggleDropdown = () => setOpenDropDown(!opendropdown);
  const handleMouseEnter = () => setOpenDropDown(true);
  const handleMouseLeave = () => setOpenDropDown(false);

  const selected = (sort) =>{
    setCurrentLable(sort)
    SetSort(sort);
    setOpenDropDown(false);
  }



  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>Sort by</p>
      <button onClick={toggleDropdown}  className="dropdownbutton"> {currentlabel} </button>
      
      
      {
        
      opendropdown && ( <ul className="dropdownmenu">
        <li> <button className="dropdownbutton" onClick={() => selected('id')} > Id </button></li> 
        <li> <button  className="dropdownbutton" onClick={() => selected('Title (asc)')} > Title (asc) </button></li> 
        <li> <button  className="dropdownbutton" onClick={() => selected('Title (desc)')} > Title (desc) </button></li> 
        {HasDates && (
        <>
        <li> <button className="dropdownbutton" onClick={() => selected('Date (asc)')}> Date (asc) </button></li>
        <li> <button className="dropdownbutton" onClick={() => selected('Date (desc)')}> Date (desc) </button></li>
        </>
        )}

        </ul>
      )
      }
    </div>
  );

}
function SortTodos(selectedSort, todos){

return[...todos].sort((a,b)=>{

  switch(selectedSort){
    case 'Id': return a.id-b.id;
    case 'Title (asc)': return a.title.localeCompare(b.title);
    case 'Title (desc)': return b.title.localeCompare(a.title);
    case 'Date (asc)' : 
    if(!a.completedAt) return -1;
    if(!b.completedAt) return 1;
    return new Date(a.completedAt) - new Date(b.completedAt);

    case 'Date (desc)' : 
    if(!a.completedAt) return 1;
    if(!b.completedAt) return -1;
    return new Date(b.completedAt) - new Date(a.completedAt);
    default: return 0;

  }
})  
}



export default TodoContainer;