//Advanced Filter component
//Path: App > SearchNav > ADVANCEDFILTER > Dropdown
//To contain: Dropdown
//Props: ??

import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";




const pLang = [
    { value: 'c++', label: 'C++' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' }
    //need to import actual country/lang etc options here
  ]

  const location = [
    { value: 'uk', label: 'UK' },
    { value: 'france', label: 'France' },
    { value: 'hawaii', label: 'Hawaii' }
    //need to import actual country/lang etc options here
  ]

  const sLang = [
    { value: 'english', label: 'English' },
    { value: 'french', label: 'French' },
    { value: 'japanese', label: 'Japanese' }
    //need to import actual country/lang etc options here
  ]

function AdvancedFilter({onChangeProgrammingLang, onChangeLocation, onChangeSpokenLang}) {

const [programmingLanguageData, setProgrammingLanguageData] = useState({})
const [spokenLanguageData, setSpokenLanguageData] = useState({})
const [locationData, setLocationData] = useState({})

//function to get pLang table data

useEffect(()=>{
  async function getTableData() {
    const response = await fetch('http://localhost:3000/tables/pLangs', {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
    setProgrammingLanguageData(dataJson.payload)
  }
  getTableData()}, [])

useEffect(()=>{
    async function getTableData() {
      const response = await fetch('http://localhost:3000/tables/sLangs', {method: 'GET', headers: {accept: 'application/JSON'},})
      const dataJson = await response.json() 
      setSpokenLanguageData(dataJson.payload)
    }
    getTableData()}, [])

  useEffect(()=>{
      async function getTableData() {
        const response = await fetch('http://localhost:3000/tables/locations', {method: 'GET', headers: {accept: 'application/JSON'},})
        const dataJson = await response.json() 
        setLocationData(dataJson.payload)
      }
      getTableData()}, [])


    return(
        <div className="advanced-filter" id="advanced-filter">
            <Dropdown options={programmingLanguageData}
            onChange={onChangeProgrammingLang}
            placeholder="Programming language"/>

            <Dropdown options={locationData}
            onChange={onChangeLocation}
            placeholder="Location"/>

            <Dropdown options={spokenLanguageData}
            onChange={onChangeSpokenLang}
            placeholder="Spoken language"/>
        </div>
    )
  }
  
  export default AdvancedFilter;