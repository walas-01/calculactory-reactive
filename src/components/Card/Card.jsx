import { useEffect, useState } from "react";


import "./Card_style.css";
import ironplateImg from '../../imgs/Reinforced_Iron_Plate.png'






function Card({itemName,desiredOutput}) {

  const [inputList,setInputList] = useState([])
  
  const [item,setItem] = useState({})
  let productRate = 0
  useEffect(()=>{

    const fetchItem = async(itemName)=>{
      try{
        const response = await fetch("/src/data/items.json")
        const itemList = await response.json()
    
        setItem( itemList.find(itm => itm.name === itemName))

      }catch(err){console.error(err)}
    }

    fetchItem(itemName)
  },[itemName,desiredOutput])
  

  if(item.outPerMin){
    productRate = Number((desiredOutput / item.outPerMin[0].amountPerMin).toFixed(1));
  }

  //* onClickHandler()

  return (
    <>
      <li className="card">
        <h5>{item.showName}</h5>

        <section className="card-content">
          <div className="card-grid">
            <div className="card-img">
              <img src={item.img} alt="item"/>
            </div>
            <div className="card-output">
              <img src="/src/imgs/icons/icon_out.png" alt="outputIcon" />
              <p className="card-output-amount">{desiredOutput}</p>
              <p className="card-output-tag">/min</p>
            </div>
            <div className="card-machine">
              <img className="card-machine-img" src={item.machineImg} alt="imgMachine" />
              <p>x{productRate}</p>
            </div>
          </div>
          <button className="button">Add</button>
        </section>
      </li>

      <ul className="card-card-container">
        {inputList.map((item,i)=><Card itemName={item.name} desiredOutput={item}></Card>)}
      </ul>

    </>
  )
}

export default Card;
