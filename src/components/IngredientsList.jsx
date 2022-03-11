import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientsList extends Component {

  render() { 
    let ingredientsComponents = this.props.ingredients.map((ingredient, idx) => {
      return (
        <Ingredient 
          key={idx}
          ingredient={ingredient}
          addToStack={this.props.addToStack}
        />
      )
    })  
  return ( 
    <div>
      {ingredientsComponents}
    </div>
    );
  }
}
 
export default IngredientsList;