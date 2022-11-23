//SearchNav component
//Path: App > Display > SEARCHNAV > SearchBar / AdvancedFilter > DropDown
//To contain: SearchBar, AdvancedFilter
//Props: ??

import AdvancedFilter from '../AdvancedFilter/AdvancedFilter';
import SearchBar from '../SearchBar/SearchBar.js'

function SearchNav({handleChange, onChange}) {
    return(
        <div className="search-nav" id="search-nav">
            <SearchBar handleChange = {handleChange}/>
            <AdvancedFilter
            onChange={onChange}
            />
        </div>
    )
  }
  
  export default SearchNav;