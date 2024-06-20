import "./Card_style.css";

import ironplateImg from '../../imgs/items/Reinforced_Iron_Plate.png'




const fetchItem = async(itemName)=>{
  try{
    fetch("./")
  }catch(err){console.error(err)}
}






function Card({itemName,itemAmount}) {
  




  return (
    <>
      <div className="card">
        <h5>Reinforced Iron Plate</h5>

        <section className="card-content">
          <div className="card-grid">
            <div className="card-img">
              <img src={ironplateImg} alt="item"/>
            </div>
            <div className="card-output">
              <img src="/src/imgs/icons/icon_out.png" alt="outputIcon" />
              <p>90</p>
              <p>/min</p>
            </div>
            <div className="card-machine">
              <img className="card-machine-img" src="/src/imgs/icons/assembler_icon.png" alt="imgMachine" />
              <p>x2</p>
            </div>
          </div>
          <button className="button">{"< Expand >"}</button>
        </section>

      </div>

      <ul>

      </ul>

    </>
  )
}

export default Card;
