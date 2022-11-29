//Dropdown component
//Path: App > SearchNav > AdvancedFilter > DROPDOWN
//To contain: mapped results of option for dropdown category
//Props: ??

import React from 'react'
import Select from 'react-select'

/**
 * Creates individual dropdown Select element, inheriting options, placeholder and onChange props. Select component is from React-Select library.
 */
function Dropdown({options, placeholder, onChange}) {
    return(
        <div className="dropdown" id="dropdown">
            <Select
            options={options}
            placeholder ={placeholder}
            name={placeholder}
            onChange={onChange}
            />
        </div>
    )
  }
  
  export default Dropdown;