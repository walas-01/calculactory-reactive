import {react} from 'react'

import Navbar from './components/Navbar/Navbar.jsx'
import Form from './components/Form/Form.jsx'

import './App.css'

function App(){
    return(
        <>
            <Navbar/>
            <div class="message">
                <h2>Welcome to Calculactory!</h2>
                <p>This is a simplistic input calculator for Satisfactory that is under constant update. I recommed to use it on your phone! Please consider <a href="https://paypal.me/walas7081?country.x=AR&locale.x=en_US">donating</a> so I can keep updating and upgrading the website!</p>
            </div>

            <Form/>

            <div class="card">
                <p></p>

                <div class="card-img">
                    <h5>Reinforced Iron Plate</h5>
                    <img  class="card-img-icon" src="/src/imgs/Reinforced_Iron_Plate.png" alt="img"/>
                </div>

                <div class="card-output">
                    <img src="/src/imgs/icons/icon_out.png" alt="outputIcon"/>
                    <h5>90</h5>
                    <p>/min</p>
                </div>

                <div class="card-machine">
                    <img src="/src/imgs/icons/assembler_icon.png" alt="imgMachine"/>
                    <p>2</p>
                </div>

                <button class="button">[ + ]</button>

            </div>
        </>
    )
}




export default App