

import './Navbar_style.css'

import { FaGithub,FaPaypal } from "react-icons/fa";

// react-icons

function Navbar(){
    return(
        <nav>
            <div className='brand-container'>
                <img src="/imgs/icons/calculactory_icon.png" alt="calculactory_icon" className='nav-icon'/>
                <img src="/imgs/icons/calculactory_logo.png" alt="calculactory_logo" className='nav-name'/>
            </div>
            <div className='nav-links'>
                <a href="https://github.com/walas-01/calculactory-reactive"> <FaGithub size={30}/> </a>
                <a href="https://paypal.me/walas7081?country.x=AR&locale.x=en_US"> <FaPaypal size={30}/> </a>
            </div>
        </nav>
    )
}



export default Navbar