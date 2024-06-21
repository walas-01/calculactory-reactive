import Navbar from "./components/Navbar/Navbar.jsx";
import Form from "./components/Form/Form.jsx";
import Card from "./components/Card/Card.jsx";

import "./App.css";
import { useState } from "react";

function App() {
  const [firstItem,setFirstItem] = useState(null)

  const renderFirstCard = ()=>{
    if(firstItem){
      console.log("Rendering: ",firstItem)
      return(<Card itemName={firstItem.inItem} desiredOutput={firstItem.inAmount} />)
    }
  }

  return (
    <>
      <Navbar />

      <div className="message">
        <h2>Welcome to Calculactory!</h2>
        <p>
          This is a simplistic input calculator for Satisfactory that is under constant update. I recommed to use it on your phone! Please consider <a href="https://paypal.me/walas7081?country.x=AR&locale.x=en_US">donating</a> so I can keep updating and upgrading the website!
        </p>    
      </div>

      <Form setFirstItem={setFirstItem}/>

      <div className="card-container">
        {renderFirstCard()}
      </div>
    </>
  );
}

//<Card itemName={"iron_plate"} desiredOutput={15} />

export default App;
