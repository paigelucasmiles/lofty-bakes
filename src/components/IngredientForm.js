import { Component } from "react"

class IngredientForm extends Component {

    state = {
        altitude: 0,
        ingredient: "",
        quantity: 0,
        unit: ""
    }

    render(){
        return(
            <form className="ingredient-entry-form">
                <label for="altitude">Altitude </label>
                <input type="text" 
                    name="altitude" 
                    value={this.state.altitude}
                    placeholder="Enter Altitude"
                    />
                <label for="quantity">Quantity </label>
                <input type="text"
                    name="quantity" 
                    placeholder="Enter Quantity"
                    />
                <label>Unit of Measure </label>
                <input name="unit" placeholder="Enter Units"></input>
                <label>Ingredient </label>
                <input name="ingredient" placeholder="Enter Ingredient"></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default IngredientForm