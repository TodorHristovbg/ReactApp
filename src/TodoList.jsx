import {StatusButton, DropDownButton} from "./Buttons";
import { SortTodos } from "./logic";
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
export default TodoList;