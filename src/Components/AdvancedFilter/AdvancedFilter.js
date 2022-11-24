//Advanced Filter component
//Path: App > SearchNav > ADVANCEDFILTER > Dropdown
//To contain: Dropdown
//Props: ??

import Dropdown from "../Dropdown/Dropdown";

//function to get pLang table data
  async function getTableData() {
    const response = await fetch('http://localhost:3000/tables/pLangs', {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
    const pLangData =(dataJson.payload)
  }
  getTableData()


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
    return(
        <div className="advanced-filter" id="advanced-filter">
            <Dropdown options={pLang}
            onChange={onChangeProgrammingLang}
            placeholder="Programming language"/>

            <Dropdown options={location}
            onChange={onChangeLocation}
            placeholder="Location"/>

            <Dropdown options={sLang}
            onChange={onChangeSpokenLang}
            placeholder="Spoken language"/>
        </div>
    )
  }
  
  export default AdvancedFilter;