//UserName component
//Path: App > Display > Results > UserCard > USERNAME
//To contain: name of user
//Props: ??

function UserName({ name }) {
	//console.log(data.name)
	return (
		<>
			<div className='nameandflag'>
				<img
					className='flag-image'
					id='user-image'
					src='https://cdn-icons-png.flaticon.com/512/197/197374.png'
					alt='duck'
				></img>
				<b className='user-name' id='user-name'>
					{name}
				</b>
			</div>
		</>
	);
}

export default UserName;
