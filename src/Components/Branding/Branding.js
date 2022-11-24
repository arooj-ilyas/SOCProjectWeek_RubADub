//Branding component
//Path: App > Header > BRANDING
//To contain: logo, brand name
//Props: ??

function Branding({ logo }) {
	return (
		<>
			<img className='logo' id='logo' src={logo} alt='logo' />
			<div className='brand-text' id='brand-text'>
				<h3 className='rub-a-dub' id='rub-a-dub'>
					rub-a-dub
				</h3>
				<h4 className='developer-hub' id='developer-hub'>
					developer hub
				</h4>
			</div>
		</>
	);
}

export default Branding;
