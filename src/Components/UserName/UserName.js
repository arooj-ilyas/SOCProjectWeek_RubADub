//UserName component
//Path: App > Display > Results > UserCard > USERNAME
//To contain: name of user
//Props: ??

/**
 * Creates UserName component, inheriting {name} prop from UserCard, generating name text and location flag
 */
function UserName({ name, flag_url }) {
	return (
		<>
			<div className='nameandflag'>
				<img
					className='flag-image'
					id='flag-image'
					src={flag_url}
					alt='flag'
				></img>
				<b className='user-name' id='user-name'>
					{name}
				</b>
			</div>
		</>
	);
}

export default UserName;
