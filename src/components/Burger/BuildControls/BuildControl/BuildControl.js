import React from 'react';
import classes from "./BuildControl.module.css";
const buildControl = (props) => (
  <div className={classes.BuildControl} id={props.id}> 
    <div className={classes.Label}>{props.type}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);

export default buildControl;
