import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Clock from '../components/Clock/Clock';

class App extends Component {
  constructor(props){
    super(props);
    console.log('App.js inside constructor', props);
    // this.state = {
    //   persons: [
    //     { name: 'Max', age: 28, id: '112'},
    //     { name: 'Manu', age: 29, id: '122'},
    //     { name: 'Stephanie', age: 26, id: '212'}
    //   ],
    //   otherState: 'some other value',
    //   showPersons: false
    // }
  }
  componentWillMount(){
    console.log('App.js inside componentWillMount()');
  }
  componentDidMount(){
    console.log('App.js inside componentDidMount()');
  }
  shouldComponentUpdate(newProps, newState){
    console.log("==[App.js]==inside shouldComponentUpdate", newProps, newState);
    return true;
  }
  componentWillUpdate(newProps, newState){
    console.log(" ==[App.js]== inside componentWillUpdate", newProps, newState);
  }
  componentDidUpdate(){
    console.log("==[App.js]== inside componentDidUpdate");
  }
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
    console.log('App.js inside render()');
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHanler}/>
       </div> 
    );}
    
    return (
      <div className={styles.App}>
        <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
