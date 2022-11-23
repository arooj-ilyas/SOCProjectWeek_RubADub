//Results component
//Path: App > Display > RESULTS > UserCard
//To contain: UserCard - mapped to render for all results from sql search
//Props: ??

import UserCard from '../UserCard/UserCard.js'

function Results() {
    return(
        <div id='results' className="results">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
       </div>

    )
  }
  
  export default Results;