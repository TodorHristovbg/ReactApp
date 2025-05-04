export function SortTodos(selectedSort, todos){

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
    