import {useState } from 'react';
import { DropDownButton } from './Buttons';
function FilterDropDown({selectedId, SetSelected, Users}){
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
export default FilterDropDown;  