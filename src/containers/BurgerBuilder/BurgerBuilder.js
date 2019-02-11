import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component{
  // constructor(propr){
  //   super(prop);
  //   this.state = {...}
  // }
  state = {
    ingredients:{
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }
  addIngredientHandler = (type) => {
    const oldCount  = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
  }
  removeIngredientHandlee = (type) => {

  }
  render(){
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </Aux>
    );
  }
};

export default BurgerBuilder;
