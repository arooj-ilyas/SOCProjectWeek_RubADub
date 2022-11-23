//Display component
//Path: App > DISPLAY > Title / Results > UserCard > Image / Bio / UserName / Tag
//To contain: Title, Results
//Props: ??

import Title from '../Title/Title.js'
import Results from '../Results/Results.js'
import SearchNav from '../SearchNav/SearchNav.js';

function Display({data, handleChange, onChange}) {
//let name = 'krish'
//console.log(data.payload[0].name)

    return(
        <div>
        <Title />
        <SearchNav handleChange = {handleChange} onChange={onChange}/>
        <Results data = {data} />
        </div>
    )
  }
  
  export default Display;