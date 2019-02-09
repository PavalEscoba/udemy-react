import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";

class BurgerBuilder extends Component{
  render(){
    return (
      <Aux>
        <div>Burger (graphical representation of Burger)</div>
        <div> Build Controls (add and remove ingredients)</div>
      </Aux>
    );
  }
};

export default BurgerBuilder;
