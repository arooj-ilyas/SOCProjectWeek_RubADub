//Results component
//Path: App > Display > RESULTS > UserCard
//To contain: UserCard - mapped to render for all results from sql search
//Props: ??

import UserCard from '../UserCard/UserCard.js'

function Results({data}) {
  //console.log(data.name)

    return(
        <div id='results' className="results">
        {data.map((userEntry) =>
          <UserCard key = {userEntry.id}
          data = {userEntry}
          />
        )}
       </div>

    )
  }
  
  export default Results;