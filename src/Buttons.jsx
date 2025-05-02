function StatusButton({ completed, onClick }) {
    const statusClass = completed ? 'button undo' : 'button complete';
    
  
    return (
      <button className={`status-button ${statusClass}`} onClick={onClick}>
        {completed ? 'Undo' : 'Complete'}
      </button>
    );
  }

function DropDownButton( {User , onClick}){
 
  return(
    <button className="dropdownbutton" onClick={onClick}>{User}</button>
  )
}

export { StatusButton, DropDownButton };