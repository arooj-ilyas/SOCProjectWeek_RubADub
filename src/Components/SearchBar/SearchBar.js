//SearchBar component
//Path: App > Display > SearchNav > SEARCHBAR
//To contain: input field with search icon
//Props: ??

function SearchBar({handleChange}) {
    return(
        <input type="text"
        placeholder="🔍 search by key word or phrase"
        className="search-bar"
        id="search-bar"
        onChange = {handleChange}>
    </input>
    )
  }
  
  export default SearchBar;