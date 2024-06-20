import Navbar from "./components/Navbar/Navbar.jsx";
import Form from "./components/Form/Form.jsx";
import Card from "./components/Card/Card.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="message">
        <h2>Welcome to Calculactory!</h2>
        <p>
          This is a simplistic input calculator for Satisfactory that is under constant update. I recommed to use it on your phone! Please consider <a href="https://paypal.me/walas7081?country.x=AR&locale.x=en_US">donating</a> so I can keep updating and upgrading the website!
        </p>    
      </div>

      <Form/>

      <div className="card-container">
        <Card />
      </div>
    </>
  );
}

export default App;
