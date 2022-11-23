//Header component
//Path: App > HEADER > Branding / Menu
//To contain: Branding, Menu
//Props: ??

import Branding from "../Branding/Branding";
import Menu from '../Menu/Menu'

function Header({logo}) {
    return(
        <div className="header" id="header">
        <Branding logo={logo}/>
        <Menu />
        </div>
    )
  }
  
  export default Header;