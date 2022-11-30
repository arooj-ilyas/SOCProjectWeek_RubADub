import "./App.css";
import Display from "../Display/Display.js";
import Header from "../Header/Header.js";
import logo from "./logo512.png";
import { useEffect, useState } from "react";

/**
 * Runs data-fetching functions and renders Header and Display components
 * @returns Header and Display components
 */
function App() {
	const [progammingLanguageText, setProgammingLanguageText] = useState("");
	const [spokenLanguageText, setSpokenLanguageText] = useState("");
	const [locationText, setLocationText] = useState("");
	const [data, setData] = useState([]);
	const [searchBarText, setSearchBarText] = useState("");

	useEffect(() => {
		/**
		 * Sends a fetch request to api /users, requesting all user data. Sets fetched data as 'data' useState.
		 */
		async function getAllData() {
			const response = await fetch("http://localhost:3000/users", {
				method: "GET",
				headers: { accept: "application/JSON" },
			});
			const dataJson = await response.json();

			setData(dataJson.payload);
		}
		getAllData();
	}, []);

	useEffect(() => {
		/**
		 * Sends a fetch request to api /users/byFilter, requesting all user data where progamming_language = {progammingLanguageText}, location ={locationText}, spoken_language = {spokenLanguageText} as supplied. Sets fetched data as 'data' useState. Reloads based on programmingLanguageText , locationText, spokenLanguageText useStates.
		 */
		async function getDataByFilter() {
			const response = await fetch(
				`http://localhost:3000/users/byFilter?programming_language=${progammingLanguageText}&location=${locationText}&spoken_language=${spokenLanguageText}`,
				{ method: "GET", headers: { accept: "application/JSON" } }
			);
			const dataJson = await response.json();
			console.log(dataJson);

			setData(dataJson.payload);
			console.log(data);
		}
		getDataByFilter();
	}, [progammingLanguageText, locationText, spokenLanguageText]);

	useEffect(() => {
		/**
		 * Sends a fetch request to api /users/:, requesting all user data where data in any columns of user table match keyword provided. Sets fetched data as 'data' useState. Reloads based on searchBarText useState.
		 */
		async function getAllDataByKeyword() {
			const response = await fetch(
				`http://localhost:3000/users/${searchBarText}`,
				{ method: "GET", headers: { accept: "application/JSON" } }
			);
			const dataJson = await response.json();

			setData(dataJson.payload);
		}
		getAllDataByKeyword();
	}, [searchBarText]);

	useEffect(() => {
		console.log(`HELLO`, data);
		console.log(`search console log >>> ${searchBarText}`);
	}, [data, searchBarText]);

	/**
	 * When the value at searchBar changes, function gets text value from searchBar and uses this value to set setSearchBarText useState
	 * @param {*} e
	 */
	function handleChange(e) {
		console.log(`value is changing >> ${e.target.value}`);
		setSearchBarText(e.target.value);
	}

	/**
	 * When the value at programming language dropdown changes, sets programmingLanguageText state to equal dropdown value
	 * @param {*} e
	 */
	function onChangeProgrammingLang(e) {
		setProgammingLanguageText(e.value);
		console.log(e);
	}

	/**
	 * When the value at spoken language dropdown changes, sets spokenLanguageText state to equal dropdown value
	 * @param {*} e
	 */
	function onChangeSpokenLang(e) {
		console.log(e);
		console.log("onchangespokenlang called");
		setSpokenLanguageText(e.value);
		console.log(spokenLanguageText);
	}

	/**
	 * When the value at location dropdown changes, sets locationText state to equal dropdown value
	 * @param {*} e
	 */
	function onChangeLocation(e) {
		console.log(e);
		setLocationText(e.value);
		console.log(locationText);
	}

	return (
		<div className='App'>
			<Header logo={logo} />
			<Display
				data={data}
				handleChange={handleChange}
				onChangeProgrammingLang={onChangeProgrammingLang}
				onChangeLocation={onChangeLocation}
				onChangeSpokenLang={onChangeSpokenLang}
			/>
		</div>
	);
}

export default App;
