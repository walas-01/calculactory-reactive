

import calIcon from '../../imgs/icons/calculatory_icon.png'
import calLogo from '../../imgs/icons/calculatory_logo.png'

// react-icons

function Navbar(){
    return(
        <nav>
            <div className='brand-container'>
                <img src={calIcon} alt="calculactory_icon" className='nav-icon'/>
                <img src={calLogo} alt="calculactory_logo" className='nav-name'/>
            </div>
            <div className='nav-buttons'>
                <a href="https://github.com/walas-01/calculactory-reactive"></a>
                <a href="https://paypal.me/walas7081?country.x=AR&locale.x=en_US"></a>
            </div>
        </nav>
    )
}

/*
            <nav>
                <div className="logo-container">
                    <img src="/src/imgs/icons/logo1.png" alt="logo" className="nav-icon">
                    <img src="/src/imgs/icons/calculactory_logo.png" alt="calculactory_logo" className="nav-name">
                </div>
                <div className="nav-icons"> <!-- [please]--->
                    <a href="https://github.com/walas-01/calculactory"><i className="fa-brands fa-github fa-2xl"></i></a>
                    <a href="https://paypal.me/walas7081?country.x=AR&locale.x=en_US"><i className="fa-brands fa-paypal fa-2xl"></i></a>
                </div>
            </nav>
*/


export default Navbar