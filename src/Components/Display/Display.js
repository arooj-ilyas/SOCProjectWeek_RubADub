//Display component
//Path: App > DISPLAY > Title / Results > UserCard > Image / Bio / UserName / Tag
//To contain: Title, Results
//Props: ??

import Title from '../Title/Title.js'
import Results from '../Results/Results.js'
import SearchNav from '../SearchNav/SearchNav.js';

function Display({data}) {

let name = 'krish'
//console.log(data.payload[0].name)

    return(
        <div>
        <Title />
        <SearchNav />
        <Results name = {name} />
        </div>
    )
  }
  
  export default Display;