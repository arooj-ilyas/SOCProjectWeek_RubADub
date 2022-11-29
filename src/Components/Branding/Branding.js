//Branding component
//Path: App > Header > BRANDING
//To contain: logo, brand name
//Props: ??

/**
 * Creates a frag containing logo image and brand-text div (product name and slogan) elements, each with a class and id
 */
function Branding({ logo }) {
	return (
		<>
			<img className='logo' id='logo' src={logo} alt='logo' />
			<div>
				<div className='brand-text' id='brand-text'>
					<h3 className='rub-a-dub' id='rub-a-dub'>
						rub-a-dub
					</h3>
					<h4 className='developer-hub' id='developer-hub'>
						developer hub
					</h4>
				</div>
			</div>
		</>
	);
}

export default Branding;
