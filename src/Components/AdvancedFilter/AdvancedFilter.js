//Advanced Filter component
//Path: App > SearchNav > ADVANCEDFILTER > Dropdown
//To contain: Dropdown
//Props: ??

import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

/**
 * Creates three dropdown Select menus, each containing a filtering option (programming language, spoken language, location)
 * @param {*} param0
 * @returns three Select dropdowns
 */
function AdvancedFilter({
	onChangeProgrammingLang,
	onChangeLocation,
	onChangeSpokenLang,
}) {
	const [programmingLanguageData, setProgrammingLanguageData] = useState({});
	const [spokenLanguageData, setSpokenLanguageData] = useState({});
	const [locationData, setLocationData] = useState({});

	useEffect(() => {
		/**
		 * Gets list of options from programming_languagesfrom sql tables.
		 * @returns object programmingLanguageData in JSON format, to be used for dropdown Select component
		 */
		async function getTableData() {
			const response = await fetch(
				"http://localhost:3000/tables/programming_languages",
				{ method: "GET", headers: { accept: "application/JSON" } }
			);
			const dataJson = await response.json();
			setProgrammingLanguageData(dataJson.payload);
		}
		getTableData();
	}, []);

	useEffect(() => {
		/**
		 * Gets list of options from location from sql tables.
		 * @param {*} {onChangeLocation}
		 * @returns objects (onChangeLocation) in JSON format, to be used for dropdown Select components
		 */
		async function getTableData() {
			const response = await fetch("http://localhost:3000/tables/locations", {
				method: "GET",
				headers: { accept: "application/JSON" },
			});
			const dataJson = await response.json();
			setLocationData(dataJson.payload);
		}
		getTableData();
	}, []);

	useEffect(() => {
		/**
		 * Gets list of options from spoken_languges from sql tables.
		 * @param {*} {onChangeSpokenLang}
		 * @returns object (spokenLanguageData) in JSON format, to be used for dropdown Select component
		 */
		async function getTableData() {
			const response = await fetch(
				"http://localhost:3000/tables/spoken_languages",
				{ method: "GET", headers: { accept: "application/JSON" } }
			);
			const dataJson = await response.json();
			setSpokenLanguageData(dataJson.payload);
		}
		getTableData();
	}, []);

	return (
		<>
			<p className='adv-filter-title'>ADVANCED FILTER</p>
			<div
				className='advanced-filter'
				id='advanced-filter'
				data-cy='dropdownMenus'
			>
				<Dropdown
					data-cy='programmingLanguageDropdown'
					options={programmingLanguageData}
					onChange={onChangeProgrammingLang}
					dropdownName='Programming language'
					dropdownId='programming_language'
				/>

				<Dropdown
					data-cy='locationDropdown'
					options={locationData}
					onChange={onChangeLocation}
					dropdownName='Location'
					dropdownId='location'
				/>
				<Dropdown
					data-cy='spokenLanguageDropdown'
					options={spokenLanguageData}
					onChange={onChangeSpokenLang}
					dropdownName='Spoken language'
					dropdownId='spoken_language'
				/>
			</div>
		</>
	);
}

export default AdvancedFilter;
