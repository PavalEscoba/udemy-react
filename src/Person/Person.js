import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p onClick={props.clicking}>I'm {props.name} and I am {props.age} years old! {props.children}</p>
            <input type="text" onChange={props.changing} value={props.name}></input>
        </div>
    )
};

export default person;