//SearchNav component
//Path: App > Display > SEARCHNAV > SearchBar / AdvancedFilter > DropDown
//To contain: SearchBar, AdvancedFilter
//Props: ??

import AdvancedFilter from '../AdvancedFilter/AdvancedFilter';
import SearchBar from '../SearchBar/SearchBar.js'

function SearchNav({handleChange, onChangeProgrammingLang, onChangeLocation, onChangeSpokenLang}) {
    return(
        <div className="search-nav" id="search-nav">
            <SearchBar handleChange = {handleChange}/>
            <AdvancedFilter
            onChangeProgrammingLang={onChangeProgrammingLang}
            onChangeLocation={onChangeLocation}
            onChangeSpokenLang={onChangeSpokenLang}
            />
        </div>
    )
  }
  
  export default SearchNav;