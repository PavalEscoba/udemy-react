import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28, id: '112'},
      { name: 'Manu', age: 29, id: '122'},
      { name: 'Stephanie', age: 26, id: '212'}
    ],
    otherState: 'some other value',
    showPersons: false
  }
  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: 'Manu', age: 29  },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  };
  nameChangedHanler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    // old way - const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  render() {
    let persons = null;
    let btnColor = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(e)=>this.nameChangedHanler(e, person.id)} />
          })}
       </div> 
      );
      btnColor = styles.Red;
    }
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push(styles.red) // classes = 'red';
    }
    if(this.state.persons.length <= 1){
      classes.push(styles.bold) // classes = ['red', 'bold']
    }
    return (
      <div className={styles.App}>
      <h1>Hi, I'm react App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnColor} onClick={this.togglePersonsHandler}>Toggle Person's list</button>
      {persons}
      </div>
    );
  }
}

export default App;
