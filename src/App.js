import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }
  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 33 },
        { name: 'Manu', age: 29  },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  };
  nameChangedHanler = (event) => {
    this.setState( {
      persons: [
        { name: 'Paval', age: 33 },
        { name: event.target.value, age: 29  },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Paulusza')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          clicking={this.switchNameHandler.bind(this, "Nadzeja")}
          changing={this.nameChangedHanler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
