import {useState } from 'react'
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

export default SortDropDown;