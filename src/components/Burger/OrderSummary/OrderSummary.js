import React from 'react';
import Aux from "../../../hoc/Auxiliary/Auxiliary";


const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}><span style={{
          fontWeight: 'bold',
          textTransform: 'capitalize'
        }}>{igKey} : {props.ingredients[igKey]}</span></li>
      )
    })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
    </Aux>
  )
};

export default orderSummary;
