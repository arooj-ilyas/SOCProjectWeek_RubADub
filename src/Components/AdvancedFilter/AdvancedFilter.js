//Advanced Filter component
//Path: App > SearchNav > ADVANCEDFILTER > Dropdown
//To contain: Dropdown
//Props: ??

import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

function AdvancedFilter({
	onChangeProgrammingLang,
	onChangeLocation,
	onChangeSpokenLang,
}) {
	const [programmingLanguageData, setProgrammingLanguageData] = useState({});
	const [spokenLanguageData, setSpokenLanguageData] = useState({});
	const [locationData, setLocationData] = useState({});

	//function to get pLang table data

	useEffect(() => {
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

	useEffect(() => {
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

	return (
		<>
			<p className='adv-filter-title'>ADVANCED FILTER</p>
			<div className='advanced-filter' id='advanced-filter'>
				<Dropdown
					options={programmingLanguageData}
					onChange={onChangeProgrammingLang}
					placeholder='Programming language'
				/>

				<Dropdown
					options={locationData}
					onChange={onChangeLocation}
					placeholder='Location'
				/>
				<Dropdown
					options={spokenLanguageData}
					onChange={onChangeSpokenLang}
					placeholder='Spoken language'
				/>
			</div>
		</>
	);
}

export default AdvancedFilter;
