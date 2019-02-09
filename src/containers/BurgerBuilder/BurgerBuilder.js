import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{
  render(){
    return (
      <Aux>
        <Burger />
        <div> Build Controls (add and remove ingredients)</div>
      </Aux>
    );
  }
};

export default BurgerBuilder;