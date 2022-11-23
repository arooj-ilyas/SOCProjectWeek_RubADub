//Dropdown component
//Path: App > SearchNav > AdvancedFilter > DROPDOWN
//To contain: mapped results of option for dropdown category
//Props: ??


import React from 'react'
import Select from 'react-select'





function Dropdown({options, placeholder}) {
    return(
        <div className="dropdown" id="dropdown">
  <Select
  options={options}
  placeholder ={placeholder}
  isMulti
  name={placeholder}
   />
        </div>
    )
  }
  
  export default Dropdown;