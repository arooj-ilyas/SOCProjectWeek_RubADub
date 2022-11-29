//UserName component
//Path: App > Display > Results > UserCard > USERNAME
//To contain: name of user
//Props: ??

/**
 * Creates UserName component, inheriting {name} prop from UserCard, generating name text and location flag
 */
function UserName({ name }) {
	return (
		<>
			<div className='nameandflag'>
				<img
					className='flag-image'
					id='flag-image'
					src='https://cdn-icons-png.flaticon.com/512/197/197374.png'
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
