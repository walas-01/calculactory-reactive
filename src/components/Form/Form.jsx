import data from '../../data/items.json';

import './Form_style.css'

function Form({setFirstItem}){

  const handleSubmit = (event)=>{
    event.preventDefault()
    const formData = new FormData(event.target)
    const payload = Object.fromEntries(formData)
    payload.inAmount = Number(payload.inAmount)
    console.log(payload)
    setFirstItem(null)
    setFirstItem(payload)
  }


  return(
    <form id="form" onSubmit={handleSubmit}>

      <div>
        <label htmlFor="inItem">Wanted Item</label>
        <select name="inItem" id="inItem">
          {data.map((item,i)=>{
            return(<option key={i} value={item.name}>{item.showName}</option>)
          })}
          </select>
      </div>

      <div>
        <label htmlFor="inAmount">Output Per Minute</label>
        <input type="number" name="inAmount" step="0.5" min="1" max="2000" defaultValue="20"/>
      </div>

      <button type="submit"><img src="/src/imgs/icons/hammer_icon.png" alt="hammer_icon"/></button>  
        
    </form>
)}


export default Form