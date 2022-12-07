//Display component
//Path: App > DISPLAY > Title / Results > UserCard > Image / Bio / UserName / Tag
//To contain: Title, Results
//Props: ??

import Title from "../Title/Title.js";
import Results from "../Results/Results.js";
import SearchNav from "../SearchNav/SearchNav.js";

/**
 * Creates main display of app, including Title component, SearchNav component and Results component, passing data, handleChange, onChangeProgramingLang, onChangeLocation, onChangeSpokenLang props
 */
function Display({
	data,
	handleChange,
	onChangeProgrammingLang,
	onChangeLocation,
	onChangeSpokenLang,
}) {
	//let name = 'krish'
	//console.log(data.payload[0].name)
	console.log(`DISPLAY DATA`, data);

	return (
		<div>
			<Title />
			<SearchNav
				handleChange={handleChange}
				onChangeProgrammingLang={onChangeProgrammingLang}
				onChangeLocation={onChangeLocation}
				onChangeSpokenLang={onChangeSpokenLang}
			/>
			<Results data={data} />
		</div>
	);
}

export default Display;
