import React from 'react';
import classes from "./BuildControl.module.css";
const buildControl = (props) => (
  <div className={classes.BuildControl} id={props.id}> 
    <div className={classes.Label}>{props.type}</div>
    <button 
      className={classes.Less} 
      onClick={props.removed}
      disabled={props.disabled}>Less</button>
    <button 
      className={classes.More} 
      onClick={props.added}>More</button>
  </div>
);

export default buildControl;