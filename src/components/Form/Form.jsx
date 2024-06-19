
import './Form_style.css'

function Form(){
    return(
        <form id="form">

            <div>
                <label for="inItem">Wanted I
                    tem</label>
                <select name="inItem" id="inItem"/>
            </div>

            <div>
                <label for="inAmount">Output Per Minute</label>
                <input type="number" id="inAmount" step="0.5" min="1" max="2000" value="20"/>
            </div>

            <button type="submit" class="btn-get"><img src="/src/imgs/icons/hammer_icon.png" alt="hammer_icon"/></button>  
        
        </form>
    )
}


export default Form