//Display component
//Path: App > DISPLAY > Title / Results > UserCard > Image / Bio / UserName / Tag
//To contain: Title, Results
//Props: ??

import Title from '../Title/Title.js'
import Results from '../Results/Results.js'
import SearchNav from '../SearchNav/SearchNav.js';

function Display() {
    return(
        <div>
        <Title />
        <SearchNav />
        <Results />
        </div>
    )
  }
  
  export default Display;