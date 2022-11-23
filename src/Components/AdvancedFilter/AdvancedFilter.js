//Advanced Filter component
//Path: App > SearchNav > ADVANCEDFILTER > Dropdown
//To contain: Dropdown
//Props: ??

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

function AdvancedFilter({handleChange}) {
    return(
        <div className="advanced-filter" id="advanced-filter">
            <Dropdown options={pLang}
            handleChange={handleChange}
            placeholder="Programming language"/>

            <Dropdown options={location}
            handleChange={handleChange}
            placeholder="Location"/>

            <Dropdown options={sLang}
            handleChange={handleChange}
            placeholder="Spoken language"/>
        </div>
    )
  }
  
  export default AdvancedFilter;