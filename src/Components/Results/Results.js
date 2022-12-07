//Results component
//Path: App > Display > RESULTS > UserCard
//To contain: UserCard - mapped to render for all results from sql search
//Props: ??

import UserCard from "../UserCard/UserCard.js";

/**
 * Renders Results component with class name and id. Maps through data received from fetch request and creates UserCard component for each user entry in data
 */
function Results({ data }) {
	console.log(`RESULTS DATA`, data);
	return (
		<div id='results' className='results' data-cy='results'>
			{data.map((userEntry) => (
				<UserCard key={userEntry.id} data={userEntry} />
			))}
		</div>
	);
}

export default Results;
