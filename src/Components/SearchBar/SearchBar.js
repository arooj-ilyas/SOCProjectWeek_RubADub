//SearchBar component
//Path: App > Display > SearchNav > SEARCHBAR
//To contain: input field with search icon
//Props: ??

function SearchBar({ handleChange }) {
	return (
		<input
			type='text'
			placeholder='🔍 search by programming language, location or skills...'
			className='search-bar'
			id='search-bar'
			onChange={handleChange}
		></input>
	);
}

export default SearchBar;
