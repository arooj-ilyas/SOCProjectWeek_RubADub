//SearchBar component
//Path: App > Display > SearchNav > SEARCHBAR
//To contain: input field with search icon
//Props: ??

/**
 * Creates SearchBar component with class name, id and alt text, inheriting {handleChange} prop so that it can react to any text value changes in search input field
 */
function SearchBar({ handleChange }) {
	return (
		<input
			type='text'
			placeholder='🔍 search by programming language, location or skills...'
			className='search-bar'
			id='search-bar'
			onChange={handleChange}
			data-cy="searchBar"
		></input>
	);
}

export default SearchBar;
