//SearchNav component
//Path: App > Display > SEARCHNAV > SearchBar / AdvancedFilter > DropDown
//To contain: SearchBar, AdvancedFilter
//Props: ??

import AdvancedFilter from '../AdvancedFilter/AdvancedFilter';
import SearchBar from '../SearchBar/SearchBar.js'

/**
 * Creates SearchNav component with class name and id, contains SearchBar and AdvancedFilter components inside one div. Inherits and passes down {handleChange, onChangeProgrammingLang, onChangeLocation, onChangeSpokenLang} props.
 */
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