import { useEffect, useState } from "react";

import "./Card_style.css";
import outputIcon from '../../imgs/icons/icon_out.png'


function Card({itemName,desiredOutput}) {
  const [inputList,setInputList] = useState([])
  
  const [item,setItem] = useState({})
  let productRate = 0
  useEffect(()=>{

    const fetchItem = async(itemName)=>{
      try{
        const response = await fetch("/src/data/items.json")
        const itemList = await response.json()
    
        setItem(itemList.find(itm => itm.name === itemName))

      }catch(err){console.error(err)}
    }

    fetchItem(itemName)
    setInputList([])
  },[itemName,desiredOutput])

  if(item.outPerMin){
    productRate = Number((desiredOutput / item.outPerMin[0].amountPerMin).toFixed(1));
  }

  const onClickHandler = ()=>{
    setInputList(item.inPerMin)
  }

  return (
    <div>
      <li className="card">
        <h5>{item.showName}</h5>

        <section className="card-content">
          <div className="card-grid">
            <div className="card-img">
              <img src={item.img} alt="item"/>
            </div>
            <div className="card-output">
              
              <img src="/imgs/icons/icon_out.png" alt="outputIcon" />

              <p className="card-output-amount">{desiredOutput}</p>
              <p className="card-output-tag">/min</p>
            </div>
            <div className="card-machine">
              <img className="card-machine-img" src={item.machineImg} alt="imgMachine" />
              <p>x{productRate}</p>
            </div>
          </div>
          {item.inPerMin && inputList.length == 0? <button className="button" onClick={onClickHandler}>{"< Expand >"}</button> : ""}
          
        </section>



      </li>

        <ul className="card-card-container">
          {inputList.map((item,i)=><Card key={i} itemName={item.name}  desiredOutput={(item.amountPerMin * productRate).toFixed(1)}/>)}
        </ul>

    </div>
  )
}

export default Card;
