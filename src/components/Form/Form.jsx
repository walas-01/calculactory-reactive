
import './Form_style.css'

function Form(){
    return(
        <form id="form">

            <div>
                <label htmlFor="inItem">Wanted Item</label>
                <select name="inItem" id="inItem"/>
            </div>

            <div>
                <label htmlFor="inAmount">Output Per Minute</label>
                <input type="number" id="inAmount" step="5" min="1" max="2000" defaultValue="20"/>
            </div>

            <button type="submit"><img src="/src/imgs/icons/hammer_icon.png" alt="hammer_icon"/></button>  
        
        </form>
    )
}


export default Form