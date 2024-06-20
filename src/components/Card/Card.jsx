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

    
    /*
    productRate = desiredOutput / item.outPerMin[0].amountPerMin
    
    console.log("[Defining Card]:")
    console.log("Item name: ",item.showName)
    console.log("Desired Output: ",desiredOutput)
    console.log("Product rate: ", productRate)
    
    */
  },[])
  

  if(item.outPerMin){
    console.log(item.img)
    productRate = desiredOutput / item.outPerMin[0].amountPerMin
  }

  


  //* onClickHandler()

  //! DE  METER LAS IMAGENES DELAS MACHINES DIRECTAMENTE EN ITEMS.JSON

  return (
    <>
      <div className="card">
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
              <img className="card-machine-img" src="/src/imgs/icons/assembler_icon.png" alt="imgMachine" />
              <p>x{productRate}</p>
            </div>
          </div>
          <button className="button">{"[ Expand ]"}</button>
        </section>

      </div>

      <ul>

      </ul>

    </>
  )
}

export default Card;
