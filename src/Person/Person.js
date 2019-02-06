import React from 'react';
import styles from './Person.module.css'

const person = ( props ) => {
    const  random = Math.random();
    if (random > 0.7){
        throw new Error('smth went wrong');
    }
    return (
        <div className={styles.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old! {props.children}</p>
           <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;